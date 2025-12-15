import { Star, MoreVertical, Image as ImageIcon } from 'lucide-react';
import { Book, ReadingStatus } from '../types/book';
import { useState } from 'react';

interface BookCardProps {
  book: Book;
  onSelect: () => void;
  onStatusChange: (status: ReadingStatus) => void;
  onCoverChange: (newCover: string) => void;
}

export function BookCard({ book, onSelect, onStatusChange, onCoverChange }: BookCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const statusConfig = {
    'reading': { label: 'Lendo', color: 'bg-blue-100 text-blue-700' },
    'read': { label: 'Lido', color: 'bg-green-100 text-green-700' },
    'want-to-read': { label: 'Quero Ler', color: 'bg-purple-100 text-purple-700' },
    'none': { label: '', color: '' }
  };

  const menuOptions: { value: ReadingStatus | 'edit-cover'; label: string }[] = [
    { value: 'reading', label: 'Lendo' },
    { value: 'read', label: 'Lido' },
    { value: 'want-to-read', label: 'Quero Ler' },
    { value: 'none', label: 'Remover Status' },
    { value: 'edit-cover', label: '✏️ Editar Capa' }
  ];

  const handleMenuClick = (value: ReadingStatus | 'edit-cover') => {
    if (value === 'edit-cover') {
      const newCover = prompt('Cole o URL da nova capa:', book.cover);
      if (newCover && newCover.trim()) {
        onCoverChange(newCover.trim());
      }
    } else {
      onStatusChange(value);
    }
    setShowMenu(false);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow relative group">
      {/* Status Menu */}
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu(!showMenu);
          }}
          className="p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
        >
          <MoreVertical className="w-4 h-4 text-slate-700" />
        </button>
        
        {showMenu && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowMenu(false)}
            />
            <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-xl border border-slate-200 py-1 z-20">
              {menuOptions.map(option => (
                <button
                  key={option.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuClick(option.value);
                  }}
                  className="w-full px-4 py-2 text-left text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Cover Image */}
      <div
        onClick={onSelect}
        className="cursor-pointer aspect-[2/3] overflow-hidden bg-slate-100"
      >
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Book Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
            {book.category}
          </span>
        </div>

        {book.status !== 'none' && (
          <span className={`inline-block px-2 py-1 rounded-full text-xs mb-2 ${statusConfig[book.status].color}`}>
            {statusConfig[book.status].label}
          </span>
        )}
        
        <h3
          onClick={onSelect}
          className="text-slate-900 mb-1 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors"
        >
          {book.title}
        </h3>
        <p className="text-slate-600 mb-2">{book.author}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-slate-700">{book.rating}</span>
          </div>
          <span className="text-slate-500">{book.pages} pgs</span>
        </div>
      </div>
    </div>
  );
}