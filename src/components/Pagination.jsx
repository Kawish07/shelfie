import React from "react";
import Button from "./Button";

export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="flex gap-2 items-center justify-center mt-4">
      <Button variant="ghost" onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Prev
      </Button>
      <span className="text-textPrimary font-semibold">
        {page} / {totalPages}
      </span>
      <Button variant="ghost" onClick={() => onPageChange(page + 1)} disabled={page === totalPages}>
        Next
      </Button>
    </div>
  );
}
