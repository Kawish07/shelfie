import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Modal from "../components/Modal";
import Badge from "../components/Badge";
import Button from "../components/Button";

const orderStages = ["Requested", "Shipped", "Completed"];

export default function ExchangeFlow() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(0);

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold text-textPrimary mb-6">Exchange Flow</h2>
      <div className="bg-background border border-borderColor rounded-lg shadow p-8 max-w-lg mx-auto">
        <div className="mb-4">
          <Badge color="success">Points: 50</Badge>
        </div>
        <Button variant="accent" onClick={() => setOpen(true)} className="w-full mb-4">Get Book</Button>
        <div className="flex gap-4 justify-center mb-4">
          {orderStages.map((s, idx) => (
            <div key={s} className={`px-4 py-2 rounded ${stage === idx ? "bg-success text-background" : "bg-borderColor text-textSecondary"}`}>
              {s}
            </div>
          ))}
        </div>
        <Button variant="ghost" onClick={() => setStage((stage + 1) % orderStages.length)} className="w-full">Next Stage</Button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center">
          <h3 className="text-xl font-bold text-textPrimary mb-2">Get Book</h3>
          <p className="text-textSecondary mb-4">Confirm your order for "Atomic Habits"?</p>
          <Button variant="success" onClick={() => setOpen(false)}>Confirm</Button>
        </div>
      </Modal>
    </MainLayout>
  );
}
