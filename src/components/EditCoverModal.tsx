import { useState } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

interface EditCoverModalProps {
  currentCover: string;
  bookTitle: string;
  onSave: (newCover: string) => void;
  onClose: () => void;
}

export function EditCoverModal({ currentCover, bookTitle, onSave, onClose }: EditCoverModalProps) {
  const [coverUrl, setCoverUrl] = useState(currentCover);

  const handleSave = () => {
    if (coverUrl.trim()) {
      onSave(coverUrl);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-slate-900">Alterar Capa</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-slate-700 mb-2">
              Livro: <span className="text-slate-900">{bookTitle}</span>
            </label>
          </div>

          {/* Preview */}
          <div className="aspect-[2/3] w-48 mx-auto rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
            {coverUrl ? (
              <img
                src={coverUrl}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-slate-300" />
              </div>
            )}
          </div>

          {/* URL Input */}
          <div>
            <label className="block text-slate-700 mb-2">URL da Imagem</label>
            <input
              type="text"
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
              placeholder="https://exemplo.com/imagem.jpg"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-slate-500 mt-2">
              Cole o URL de uma imagem da internet
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-slate-200">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
