import React from "react";
import MainLayout from "../layouts/MainLayout";
import Badge from "../components/Badge";
import { mockReviews } from "../utils/mockReviews";

const book = {
  id: 1,
  title: "Atomic Habits",
  author: "James Clear",
  category: "Self-help",
  city: "Karachi",
  condition: "New",
  points: 50,
  image: "https://images.unsplash.com/photo-1613520761471-8d5f28e343c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXRvbWljJTIwaGFiaXRzfGVufDB8fDB8fHww",
  description: "A book about building good habits and breaking bad ones.",
};

export default function BookDetail() {
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row gap-8">
        <img src={book.image} alt={book.title} className="w-64 h-96 object-cover rounded shadow" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-textPrimary mb-2">{book.title}</h2>
          <div className="text-lg text-textSecondary mb-2">by {book.author}</div>
          <div className="flex gap-2 mb-4">
            <Badge color="primary">{book.category}</Badge>
            <Badge color="accent">{book.city}</Badge>
            <Badge color="success">{book.condition}</Badge>
          </div>
          <div className="mb-4 text-textPrimary">{book.description}</div>
          <div className="mb-4 text-success font-bold">Points: {book.points}</div>
          <button className="bg-accent text-background px-4 py-2 rounded shadow hover:bg-accent/90">Get Book</button>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-textPrimary mb-4">Reviews</h3>
        <ul>
          {mockReviews.map(review => (
            <li key={review.id} className="mb-4 border-b border-borderColor pb-4">
              <div className="font-bold text-textPrimary">{review.user}</div>
              <div className="text-success">Rating: {review.rating}/5</div>
              <div className="text-textSecondary">{review.comment}</div>
              <div className="text-xs text-textSecondary">{review.date}</div>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}
