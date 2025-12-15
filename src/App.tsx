import { useState } from 'react';
import { BookLibrary } from './components/BookLibrary';
import { BookDetail } from './components/BookDetail';
import { Book } from './types/book';
import { mockBooks } from './data/mockBooks';

export default function App() {
  const [books, setBooks] = useState<Book[]>(mockBooks);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  const selectedBook = selectedBookId 
    ? books.find(book => book.id === selectedBookId) || null
    : null;

  const handleStatusChange = (bookId: string, newStatus: Book['status']) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === bookId ? { ...book, status: newStatus } : book
      )
    );
  };

  const handleCoverChange = (bookId: string, newCover: string) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === bookId ? { ...book, cover: newCover } : book
      )
    );
  };

  const handleAddBook = (newBook: Omit<Book, 'id'>) => {
    const book: Book = {
      ...newBook,
      id: Date.now().toString()
    };
    setBooks(prevBooks => [...prevBooks, book]);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {selectedBook ? (
        <BookDetail 
          book={selectedBook} 
          onBack={() => setSelectedBookId(null)} 
        />
      ) : (
        <BookLibrary 
          books={books}
          onSelectBook={(book) => setSelectedBookId(book.id)}
          onStatusChange={handleStatusChange}
          onCoverChange={handleCoverChange}
          onAddBook={handleAddBook}
        />
      )}
    </div>
  );
}