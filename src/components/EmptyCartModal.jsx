import React from "react";
import "./css/emptyCartModal.css"

const EmptyCartModal = (props) => {
  const { isEmptyModalOpen, onClose } = props;
  if (!isEmptyModalOpen) return null;

  return (
    <div className="emptyModal bg-gray-600 bg-opacity-50">
      <div className="emptyModal-content shadow-lg">
        <h2>Notice</h2>
        <p className="mb-6 text-black text-center">
          You don't have anything in the cart! Please keep shopping!
        </p>
        <div className="flex justify-end gap-4 text-black">
          <button onClick={onClose} className="emptyModal-content-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCartModal;
