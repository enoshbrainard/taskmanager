'use client';

import React, { useEffect, useState } from 'react';
import api from '@/utils/api';
import { Card } from '@/components/Card';
import { CheckCircle, Clock, AlertCircle, Users } from 'lucide-react';
import { TaskStatusChart } from '@/components/Charts/TaskStatusChart';
import { TaskPriorityChart } from '@/components/Charts/TaskPriorityChart';

export default function DashboardPage() {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await api.get('/dashboard');
                setStats(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
    );

    const statCards = [
        { label: 'Total Tasks', value: stats?.totalTasks, icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Completed', value: stats?.completedTasks, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
        { label: 'In Progress', value: stats?.inProgressTasks, icon: AlertCircle, color: 'text-yellow-600', bg: 'bg-yellow-50' },
        { label: 'Employees', value: stats?.totalEmployees, icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
    ];

    const statusData = [
        { name: 'Pending', value: stats?.pendingTasks || 0, color: '#9CA3AF' },
        { name: 'In Progress', value: stats?.inProgressTasks || 0, color: '#3B82F6' },
        { name: 'Completed', value: stats?.completedTasks || 0, color: '#10B981' },
    ];

    // Mock priority data since backend doesn't provide it yet
    const priorityData = [
        { name: 'Low', value: 30, color: '#10B981' },
        { name: 'Medium', value: 50, color: '#F59E0B' },
        { name: 'High', value: 20, color: '#EF4444' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                    <p className="text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
                </div>
                <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={index} className="flex items-center gap-4 hover:shadow-md transition-shadow duration-200">
                            <div className={`p-4 rounded-xl ${stat.bg} ${stat.color}`}>
                                <Icon size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value || 0}</p>
                            </div>
                        </Card>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Task Status Distribution</h3>
                    <TaskStatusChart data={statusData} />
                </Card>

                <Card className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Task Priority Breakdown</h3>
                    <TaskPriorityChart data={priorityData} />
                </Card>
            </div>
        </div>
    );
}
