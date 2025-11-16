import React from "react";

export default function BookCard({ book, onClick }) {
  return (
    <div
      className="bg-background border border-borderColor rounded-lg shadow hover:shadow-lg transition-shadow p-4 flex flex-col gap-2 cursor-pointer hover:bg-accent/10"
      onClick={onClick}
    >
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <div className="font-bold text-lg text-textPrimary">{book.title}</div>
      <div className="text-textSecondary">{book.author}</div>
      <div className="flex gap-2 text-sm">
        <span className="bg-primary text-background px-2 py-1 rounded">{book.category}</span>
        <span className="bg-accent text-background px-2 py-1 rounded">{book.city}</span>
        <span className="bg-success text-background px-2 py-1 rounded">{book.condition}</span>
      </div>
      <div className="mt-2 text-xs text-textSecondary">Points: {book.points}</div>
    </div>
  );
}
