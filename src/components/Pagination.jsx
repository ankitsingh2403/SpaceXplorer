import React from "react";

export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="relative z-10 flex flex-col md:flex-row justify-center gap-3 mt-6 items-center">
      <div className="flex gap-3">
        <button
          onClick={() => setPage(1)}
          className="px-6 py-2 bg-green-600 rounded text-white hover:bg-green-500 transition font-semibold"
        >
          Go to First Page
        </button>
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          className="px-6 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 transition"
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          className="px-6 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 transition"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      <p className="text-gray-300 mt-2 md:mt-0">Page {page} of {totalPages}</p>
    </div>
  );
}
