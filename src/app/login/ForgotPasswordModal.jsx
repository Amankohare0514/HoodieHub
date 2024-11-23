"use client"
import React, { useRef, useState } from "react";

const ForgotPasswordModal = ({ email, setEmail, onClose, onSend }) => {

    const modalRef = useRef(null);

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };
    return (
        <div
            onClick={handleOutsideClick}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div ref={modalRef} className="bg-white rounded-lg p-6 w-[350px]">
                <h2 className="text-lg font-semibold mb-4">Forgot Password</h2>
                <p className="text-sm mb-4">Enter your email to reset your password.</p>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-3 py-2 border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex justify-end space-x-3 mt-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSend}
                        className="bg-blue-500 px-4 py-2 rounded-md text-sm text-white hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
