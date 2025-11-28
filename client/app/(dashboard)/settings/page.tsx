'use client';

import React from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useAuth } from '@/context/AuthContext';

export default function SettingsPage() {
    const { user } = useAuth();

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

            <div className="max-w-2xl space-y-6">
                <Card className="p-6 space-y-6">
                    <h2 className="text-lg font-bold text-gray-900 border-b pb-2">Profile Settings</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Full Name" defaultValue={user?.name} />
                        <Input label="Email Address" defaultValue={user?.email} disabled />
                    </div>

                    <Input label="Role" defaultValue={user?.role} disabled />

                    <div className="flex justify-end">
                        <Button>Save Changes</Button>
                    </div>
                </Card>

                <Card className="p-6 space-y-6">
                    <h2 className="text-lg font-bold text-gray-900 border-b pb-2">App Preferences</h2>

                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium text-gray-900">Email Notifications</h3>
                            <p className="text-sm text-gray-500">Receive emails about task updates.</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer bg-blue-600">
                            <span className="absolute left-0 inline-block w-6 h-6 bg-white border-2 border-blue-600 rounded-full shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium text-gray-900">Dark Mode</h3>
                            <p className="text-sm text-gray-500">Switch between light and dark themes.</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer bg-gray-200">
                            <span className="absolute left-0 inline-block w-6 h-6 bg-white border-2 border-gray-200 rounded-full shadow transform translate-x-0 transition-transform duration-200 ease-in-out"></span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
