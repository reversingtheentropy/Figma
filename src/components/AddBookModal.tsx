import { useState } from 'react';
import { X, Plus, BookOpen } from 'lucide-react';
import { Book } from '../types/book';

interface AddBookModalProps {
  onAdd: (book: Omit<Book, 'id'>) => void;
  onClose: () => void;
  existingCategories: string[];
}

export function AddBookModal({ onAdd, onClose, existingCategories }: AddBookModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    cover: '',
    description: '',
    category: '',
    pages: '',
    publishedYear: '',
    rating: '0',
    status: 'none' as Book['status']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.author) {
      alert('Título e autor são obrigatórios');
      return;
    }

    const newBook: Omit<Book, 'id'> = {
      title: formData.title,
      author: formData.author,
      cover: formData.cover || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400',
      description: formData.description,
      category: formData.category || 'Outros',
      pages: parseInt(formData.pages) || 0,
      publishedYear: parseInt(formData.publishedYear) || new Date().getFullYear(),
      rating: parseFloat(formData.rating) || 0,
      status: formData.status
    };

    onAdd(newBook);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-slate-900">Adicionar Novo Livro</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Title */}
            <div className="md:col-span-2">
              <label className="block text-slate-700 mb-2">
                Título <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ex: O Pequeno Príncipe"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-slate-700 mb-2">
                Autor <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Ex: Antoine de Saint-Exupéry"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-slate-700 mb-2">Categoria</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                list="categories"
                placeholder="Ex: Ficção, Romance..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <datalist id="categories">
                {existingCategories.map(cat => (
                  <option key={cat} value={cat} />
                ))}
              </datalist>
            </div>

            {/* Pages */}
            <div>
              <label className="block text-slate-700 mb-2">Páginas</label>
              <input
                type="number"
                name="pages"
                value={formData.pages}
                onChange={handleChange}
                placeholder="Ex: 96"
                min="0"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Published Year */}
            <div>
              <label className="block text-slate-700 mb-2">Ano de Publicação</label>
              <input
                type="number"
                name="publishedYear"
                value={formData.publishedYear}
                onChange={handleChange}
                placeholder="Ex: 1943"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-slate-700 mb-2">Avaliação (0-5)</label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="Ex: 4.5"
                min="0"
                max="5"
                step="0.1"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-slate-700 mb-2">Status de Leitura</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="none">Sem Status</option>
                <option value="want-to-read">Quero Ler</option>
                <option value="reading">Lendo</option>
                <option value="read">Lido</option>
              </select>
            </div>

            {/* Cover URL */}
            <div className="md:col-span-2">
              <label className="block text-slate-700 mb-2">URL da Capa</label>
              <input
                type="url"
                name="cover"
                value={formData.cover}
                onChange={handleChange}
                placeholder="https://exemplo.com/capa.jpg"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-slate-500 mt-1">
                Cole o URL de uma imagem da capa (opcional)
              </p>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-slate-700 mb-2">Descrição/Sinopse</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Breve descrição do livro..."
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-3 mt-6 pt-6 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Adicionar Livro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
