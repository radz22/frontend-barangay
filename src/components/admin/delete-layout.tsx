import React from "react";
import { UseMutationResult } from "@tanstack/react-query";

interface DeleteProps {
  id: string | null;
  handleDelete: (id: string | null) => void;
  deleteMutation: UseMutationResult<void, Error, string | null>;
}

const DeleteLayout: React.FC<DeleteProps> = ({
  id,
  handleDelete,
  deleteMutation,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Confirm Deletion
      </h2>

      {/* Modal Body */}
      <p className="text-gray-600 mb-6">
        Are you sure you want to delete this item? This action cannot be undone.
      </p>

      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
          onClick={() => id && handleDelete(id)}
          disabled={deleteMutation.isPending}
        >
          {deleteMutation.isPending ? "Deleting..." : "Yes, Delete"}
        </button>
      </div>
    </div>
  );
};

export default DeleteLayout;
