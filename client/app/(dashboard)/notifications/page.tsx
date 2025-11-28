'use client';

import React from 'react';
import { Card } from '@/components/Card';
import { Bell } from 'lucide-react';

export default function NotificationsPage() {
    const notifications = [
        { id: 1, title: 'New Task Assigned', message: 'You have been assigned to "Update Homepage"', time: '2 hours ago', read: false },
        { id: 2, title: 'System Update', message: 'The system will be down for maintenance at midnight.', time: '5 hours ago', read: true },
        { id: 3, title: 'Task Completed', message: 'John Doe completed "Fix Login Bug"', time: '1 day ago', read: true },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>

            <div className="space-y-4">
                {notifications.map((notif) => (
                    <Card key={notif.id} className={`p-4 flex gap-4 ${!notif.read ? 'bg-blue-50 border-blue-100' : ''}`}>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm">
                            <Bell size={20} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className={`font-medium ${!notif.read ? 'text-blue-900' : 'text-gray-900'}`}>{notif.title}</h3>
                                <span className="text-xs text-gray-500">{notif.time}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
