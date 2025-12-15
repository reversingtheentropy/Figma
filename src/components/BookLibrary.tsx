import { useState, useMemo } from 'react';
import { Search, BookOpen, Library, Plus } from 'lucide-react';
import { Book } from '../types/book';
import { mockBooks } from '../data/mockBooks';
import { BookCard } from './BookCard';
import { FilterBar } from './FilterBar';
import { AddBookModal } from './AddBookModal';

interface BookLibraryProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
  onStatusChange: (bookId: string, newStatus: Book['status']) => void;
  onCoverChange: (bookId: string, newCover: string) => void;
  onAddBook: (book: Omit<Book, 'id'>) => void;
}

export function BookLibrary({ books, onSelectBook, onStatusChange, onCoverChange, onAddBook }: BookLibraryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(books.map(book => book.category)));
    return ['all', ...cats];
  }, [books]);

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'all' || book.category === selectedCategory;
      
      const matchesStatus = 
        selectedStatus === 'all' || book.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [books, searchQuery, selectedCategory, selectedStatus]);

  const stats = useMemo(() => {
    return {
      total: books.length,
      reading: books.filter(b => b.status === 'reading').length,
      read: books.filter(b => b.status === 'read').length,
      wantToRead: books.filter(b => b.status === 'want-to-read').length,
    };
  }, [books]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-6">
            <Library className="w-8 h-8 text-blue-600" />
            <h1 className="text-slate-900">Minha Biblioteca Digital</h1>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar livros ou autores..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-slate-500 mb-1">Total de Livros</div>
            <div className="text-slate-900">{stats.total}</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-slate-500 mb-1">Lendo</div>
            <div className="text-blue-600">{stats.reading}</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-slate-500 mb-1">Lidos</div>
            <div className="text-green-600">{stats.read}</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-slate-500 mb-1">Quero Ler</div>
            <div className="text-purple-600">{stats.wantToRead}</div>
          </div>
        </div>

        {/* Filters */}
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          selectedStatus={selectedStatus}
          onCategoryChange={setSelectedCategory}
          onStatusChange={setSelectedStatus}
        />

        {/* Add Book Modal */}
        {showAddModal && (
          <AddBookModal
            onAdd={onAddBook}
            onClose={() => setShowAddModal(false)}
            existingCategories={categories.filter(cat => cat !== 'all')}
          />
        )}

        {/* Books Grid */}
        {filteredBooks.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">Nenhum livro encontrado</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map(book => (
              <BookCard
                key={book.id}
                book={book}
                onSelect={() => onSelectBook(book)}
                onStatusChange={(newStatus) => onStatusChange(book.id, newStatus)}
                onCoverChange={(newCover) => onCoverChange(book.id, newCover)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}