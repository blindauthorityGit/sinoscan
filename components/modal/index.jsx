import React from "react";

const Modal = ({ isOpen, close, title, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 z-50"
            onClick={close}
        >
            <div
                className="bg-white p-6 lg:p-12 rounded-lg max-w-6xl w-full overflow-auto"
                onClick={(e) => e.stopPropagation()}
                style={{ maxHeight: "90vh" }}
            >
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-bold">{title}</h4>
                    <button onClick={close} className="text-xl font-semibold">
                        &times;
                    </button>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
