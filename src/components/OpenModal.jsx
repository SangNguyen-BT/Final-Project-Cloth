import React from "react";

const OpenModal = (props) => {
  const { isModalOpen, backToHomePage } = props;
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-80">
        <h2 className="text-lg text-center font-bold mb-4">Order Confirmed!</h2>
        <p className="mb-6 text-center">Your order has been successfully placed.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={backToHomePage}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenModal;
