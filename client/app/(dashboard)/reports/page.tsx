'use client';

import React from 'react';
import { Card } from '@/components/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ReportsPage() {
    const data = [
        { name: 'Jan', tasks: 40 },
        { name: 'Feb', tasks: 30 },
        { name: 'Mar', tasks: 20 },
        { name: 'Apr', tasks: 27 },
        { name: 'May', tasks: 18 },
        { name: 'Jun', tasks: 23 },
        { name: 'Jul', tasks: 34 },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
            <p className="text-gray-500">Detailed analysis of team performance.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Tasks Completed Over Time</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip />
                                <Bar dataKey="tasks" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <Card className="p-6 flex items-center justify-center bg-gray-50 border-dashed">
                    <p className="text-gray-500">More reports coming soon...</p>
                </Card>
            </div>
        </div>
    );
}
