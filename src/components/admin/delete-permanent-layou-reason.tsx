import React, { useState } from "react";
import { UseMutationResult } from "@tanstack/react-query";

interface DeleteProps {
  id: string | null;
  handleDelete: (id: string | null) => void;
  deleteMutation: UseMutationResult<void, Error, string | null>;
}

const DeletePermanentLayoutWithReason: React.FC<DeleteProps> = ({
  id,
  handleDelete,
  deleteMutation,
}) => {
  const [reason, setReason] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!reason.trim()) {
      setError("Reason is required");
      return;
    }

    setError(null);
    handleDelete(id);
    setReason("");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Confirm Deletion
      </h2>

      <p className="text-gray-600 mb-6">
        Are you certain you want to permanently delete this data? This action is
        irreversible.
      </p>

      <div className="mb-4">
        <label htmlFor="reason" className="text-sm font-medium text-gray-700">
          Reason for Deletion
        </label>
        <input
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          type="text"
          id="reason"
          className={`w-full mt-1 px-3 py-2 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
          onClick={handleSubmit}
          disabled={deleteMutation.isPending}
        >
          {deleteMutation.isPending ? "Deleting..." : "Yes, Delete"}
        </button>
      </div>
    </div>
  );
};

export default DeletePermanentLayoutWithReason;
