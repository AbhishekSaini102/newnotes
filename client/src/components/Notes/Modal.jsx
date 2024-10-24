import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import XMarkIcon from "../SvgIcons/XMarkIcon";

const Modal = ({
  isOpen,
  onClose,
  onSave,
  initialTitle = "",
  initialContent = "",
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  // Close the modal when the Esc key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ title, content });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-11/12 max-w-3xl max-h-[80vh] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl font-medium bg-transparent focus:outline-none w-full placeholder-gray-400"
            />
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XMarkIcon />
            </button>
          </div>
          <textarea
            rows="6"
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-transparent focus:outline-none resize-none text-gray-700 placeholder-gray-400"
          ></textarea>
        </div>
        <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  initialTitle: PropTypes.string,
  initialContent: PropTypes.string,
};

export default Modal;
