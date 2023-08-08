"use client";

import React, { useState } from "react";

const WaitlistModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="btn py-2 w-full">
        Join Waitlist →
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-60">
          <div className="bg-white p-2 rounded-lg shadow-lg max-w-md w-full">
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                src="https://embeds.beehiiv.com/e99f72b1-e83b-4dc5-a550-470d0236f44f"
                data-test-id="beehiiv-embed"
                width="100%"
                height="320"
                className="rounded-md"
              ></iframe>
            </div>
            <button onClick={closeModal} className="btn py-1 mt-2">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitlistModal;
