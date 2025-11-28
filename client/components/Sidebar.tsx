'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
    LayoutDashboard,
    CheckSquare,
    Users,
    LogOut,
    Settings,
    PieChart,
    Bell,
    PlusCircle
} from 'lucide-react';
import { cn } from './Button';

export const Sidebar = () => {
    const pathname = usePathname();
    const { user, logout } = useAuth();

    const mainLinks = [
        { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/tasks', label: 'Tasks', icon: CheckSquare },
        { href: '/employees', label: 'Team Members', icon: Users, adminOnly: true },
    ];

    const secondaryLinks = [
        { href: '/reports', label: 'Reports', icon: PieChart },
        { href: '/notifications', label: 'Notifications', icon: Bell },
        { href: '/settings', label: 'Settings', icon: Settings },
    ];

    const NavItem = ({ link }: { link: any }) => {
        if (link.adminOnly && user?.role !== 'admin') return null;

        const Icon = link.icon;
        const isActive = pathname === link.href;

        return (
            <Link
                href={link.href}
                className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group',
                    isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                )}
            >
                <Icon size={20} className={cn(isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-600')} />
                {link.label}
            </Link>
        );
    };

    return (
        <div className="w-72 bg-white border-r border-gray-100 min-h-screen flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
            <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                        <CheckSquare size={22} />
                    </div>
                    TaskPro
                </h2>
            </div>

            <div className="flex-1 px-4 space-y-8 overflow-y-auto">
                <div>
                    <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Main Menu</p>
                    <div className="space-y-2">
                        {mainLinks.map((link) => (
                            <NavItem key={link.label} link={link} />
                        ))}
                    </div>
                </div>

                <div>
                    <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Preferences</p>
                    <div className="space-y-2">
                        {secondaryLinks.map((link) => (
                            <NavItem key={link.label} link={link} />
                        ))}
                    </div>
                </div>

                {user?.role === 'admin' && (
                    <div className="px-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
                            <h3 className="font-bold text-gray-900 mb-1">Pro Features</h3>
                            <p className="text-xs text-gray-500 mb-4">Manage your team efficiently with advanced tools.</p>
                            <Link href="/tasks" className="flex items-center justify-center gap-2 w-full bg-white text-blue-600 text-sm font-medium py-2 rounded-lg border border-blue-100 hover:shadow-sm transition-all">
                                <PlusCircle size={16} />
                                Create Task
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-4 border-t border-gray-50 m-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center font-bold text-blue-600 text-lg">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">{user?.name}</p>
                        <p className="text-xs text-gray-500 truncate capitalize">{user?.role}</p>
                    </div>
                </div>
                <button
                    onClick={logout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                    <LogOut size={16} />
                    Sign Out
                </button>
            </div>
        </div>
    );
};
