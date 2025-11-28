'use client';

import React, { useEffect, useState } from 'react';
import api from '@/utils/api';
import { Card } from '@/components/Card';
import { useAuth } from '@/context/AuthContext';
import { User, Mail, Briefcase } from 'lucide-react';

export default function EmployeesPage() {
    const { user } = useAuth();
    const [employees, setEmployees] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const res = await api.get('/employees');
                setEmployees(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (user?.role === 'admin') {
            fetchEmployees();
        } else {
            setLoading(false);
        }
    }, [user]);

    if (user?.role !== 'admin') {
        return (
            <div className="text-center py-12">
                <h2 className="text-xl font-bold text-gray-900">Access Denied</h2>
                <p className="text-gray-500">Only administrators can view this page.</p>
            </div>
        );
    }

    if (loading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Employees</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {employees.map((emp) => (
                    <Card key={emp._id} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                            {emp.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 truncate">{emp.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                <Mail size={14} />
                                <span className="truncate">{emp.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                <Briefcase size={14} />
                                <span className="truncate">{emp.department}</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
