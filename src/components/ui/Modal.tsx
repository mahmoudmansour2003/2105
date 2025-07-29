import React, { FC, ReactNode } from 'react';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal: FC<ModalProps> = ({ onClose, children, title }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform scale-95 opacity-0 animate-scale-in">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold">{title || 'Details'}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 