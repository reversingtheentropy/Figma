import { Filter } from 'lucide-react';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  selectedStatus: string;
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: string) => void;
}

export function FilterBar({
  categories,
  selectedCategory,
  selectedStatus,
  onCategoryChange,
  onStatusChange
}: FilterBarProps) {
  const statuses = [
    { value: 'all', label: 'Todos' },
    { value: 'reading', label: 'Lendo' },
    { value: 'read', label: 'Lidos' },
    { value: 'want-to-read', label: 'Quero Ler' },
    { value: 'none', label: 'Sem Status' }
  ];

  return (
    <div className="bg-white rounded-lg p-4 border border-slate-200 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-slate-600" />
        <span className="text-slate-700">Filtros</span>
      </div>

      <div className="space-y-4">
        {/* Category Filter */}
        <div>
          <label className="block text-slate-600 mb-2">Categoria</label>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category === 'all' ? 'Todas' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-slate-600 mb-2">Status de Leitura</label>
          <div className="flex flex-wrap gap-2">
            {statuses.map(status => (
              <button
                key={status.value}
                onClick={() => onStatusChange(status.value)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedStatus === status.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {status.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
