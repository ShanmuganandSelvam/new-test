import { Check, Trash2, X } from 'lucide-react';

interface TodoItemProps {
  todo: {
    id: string;
    title: string;
    completed: boolean;
    category: string;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-2 transition-all hover:shadow-md">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {todo.completed && <Check size={14} className="text-white" />}
        </button>
        <span className={`${todo.completed ? 'line-through text-gray-400' : ''}`}>
          {todo.title}
        </span>
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
          {todo.category}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};
