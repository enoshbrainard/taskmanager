import React from 'react';
import { Card } from './Card';
import { Calendar, User as UserIcon, Trash2 } from 'lucide-react';

interface Task {
    _id: string;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    priority: 'low' | 'medium' | 'high';
    assignedTo?: {
        _id: string;
        name: string;
    };
    dueDate?: string;
}

interface TaskCardProps {
    task: Task;
    onStatusChange?: (id: string, status: string) => void;
    onDelete?: (id: string) => void;
    isAdmin?: boolean;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange, onDelete, isAdmin }) => {
    const priorityColors = {
        low: 'bg-green-100 text-green-700',
        medium: 'bg-yellow-100 text-yellow-700',
        high: 'bg-red-100 text-red-700',
    };

    const statusColors = {
        pending: 'bg-gray-100 text-gray-700',
        'in-progress': 'bg-blue-100 text-blue-700',
        completed: 'bg-green-100 text-green-700',
    };

    return (
        <Card className="hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
                        {task.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[task.status]}`}>
                        {task.status.replace('-', ' ')}
                    </span>
                </div>
                {isAdmin && onDelete && (
                    <button
                        onClick={() => onDelete(task._id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        title="Delete Task"
                    >
                        <Trash2 size={18} />
                    </button>
                )}
            </div>

            <h3 className="font-bold text-gray-900 mb-2">{task.title}</h3>
            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{task.description}</p>

            <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                    <UserIcon size={16} />
                    <span>{task.assignedTo?.name || 'Unassigned'}</span>
                </div>
                {task.dueDate && (
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                )}
            </div>

            {onStatusChange && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                    <select
                        className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={task.status}
                        onChange={(e) => onStatusChange(task._id, e.target.value)}
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            )}
        </Card>
    );
};
