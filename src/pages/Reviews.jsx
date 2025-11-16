import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import Alert from "../components/Alert";
import { mockReviews } from "../utils/mockReviews";

export default function Reviews() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("Review added!");
    setComment("");
    setRating(5);
  };

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold text-textPrimary mb-6">Add a Review</h2>
      {success && <Alert type="success">{success}</Alert>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-background border border-borderColor rounded-lg shadow p-8 mb-8">
        <label className="text-textPrimary font-medium mb-1 block">Rating</label>
        <select value={rating} onChange={e => setRating(Number(e.target.value))} className="border border-borderColor rounded px-3 py-2 bg-background text-textPrimary mb-4">
          {[5,4,3,2,1].map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <Input
          label="Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
          required
        />
        <Button type="submit" variant="success" className="w-full mt-4">Submit Review</Button>
      </form>
      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-textPrimary mb-4">Reviews List</h3>
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
