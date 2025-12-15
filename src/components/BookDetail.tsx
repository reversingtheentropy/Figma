import { ArrowLeft, Star, Calendar, BookOpen, User } from 'lucide-react';
import { Book, ReadingStatus } from '../types/book';

interface BookDetailProps {
  book: Book;
  onBack: () => void;
}

export function BookDetail({ book, onBack }: BookDetailProps) {
  const statusOptions: { value: ReadingStatus; label: string; color: string }[] = [
    { value: 'reading', label: 'Lendo', color: 'bg-blue-600 hover:bg-blue-700' },
    { value: 'read', label: 'Lido', color: 'bg-green-600 hover:bg-green-700' },
    { value: 'want-to-read', label: 'Quero Ler', color: 'bg-purple-600 hover:bg-purple-700' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para Biblioteca</span>
          </button>
        </div>
      </header>

      {/* Book Details */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 p-8">
            {/* Cover */}
            <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-4">
                  {book.category}
                </div>

                <h1 className="text-slate-900 mb-2">{book.title}</h1>
                
                <div className="flex items-center gap-2 text-slate-600 mb-6">
                  <User className="w-4 h-4" />
                  <span>{book.author}</span>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <div>
                      <div className="text-slate-500">Avaliação</div>
                      <div className="text-slate-900">{book.rating}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-slate-400" />
                    <div>
                      <div className="text-slate-500">Páginas</div>
                      <div className="text-slate-900">{book.pages}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-slate-400" />
                    <div>
                      <div className="text-slate-500">Publicado</div>
                      <div className="text-slate-900">
                        {book.publishedYear > 0 ? book.publishedYear : `${Math.abs(book.publishedYear)} a.C.`}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-slate-900 mb-3">Sinopse</h2>
                  <p className="text-slate-600 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>

              {/* Status Buttons */}
              <div>
                <div className="text-slate-700 mb-3">Marcar como:</div>
                <div className="flex flex-wrap gap-3">
                  {statusOptions.map(option => (
                    <button
                      key={option.value}
                      className={`px-6 py-3 text-white rounded-lg transition-colors ${option.color} ${
                        book.status === option.value ? 'ring-2 ring-offset-2 ring-slate-400' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
