import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function BookUpload() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    condition: "New",
    city: "",
    image: "",
    visibility: "Nationwide",
  });
  const [preview, setPreview] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files[0]) {
      setPreview(URL.createObjectURL(files[0]));
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <MainLayout>
      {/* Hero Section with Gradient */}
      <div className="relative -mx-6 -mt-6 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-emerald-700 to-teal-800 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0aDR2NGgtNHptMCAxMGg0djRoLTR6bS0xMCAwaDR2NGgtNHptLTEwIDBoNHY0aC00em0yMCAxMGg0djRoLTR6bTEwIDBoNHY0aC00em0tMjAgMGg0djRoLTR6bS0xMCAwaDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
            <span className="text-5xl">📖</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Share Your Story
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            List your book and connect with readers in your community
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Elegant Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3">
            <div className="flex flex-col items-center">
              <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                step >= 1 
                  ? "bg-gradient-to-br from-primary to-emerald-700 text-white shadow-lg scale-110" 
                  : "bg-gray-100 text-gray-400 shadow"
              }`}>
                {step > 1 ? "✓" : "1"}
                {step === 1 && (
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping"></div>
                )}
              </div>
              <span className={`mt-3 text-sm font-semibold ${step >= 1 ? "text-primary" : "text-gray-400"}`}>
                Basic Info
              </span>
            </div>
            
            <div className={`w-24 h-1 rounded-full transition-all duration-500 ${
              step >= 2 ? "bg-gradient-to-r from-primary to-emerald-700" : "bg-gray-200"
            }`}></div>
            
            <div className="flex flex-col items-center">
              <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                step >= 2 
                  ? "bg-gradient-to-br from-primary to-emerald-700 text-white shadow-lg scale-110" 
                  : "bg-gray-100 text-gray-400 shadow"
              }`}>
                {step > 2 ? "✓" : "2"}
                {step === 2 && (
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping"></div>
                )}
              </div>
              <span className={`mt-3 text-sm font-semibold ${step >= 2 ? "text-primary" : "text-gray-400"}`}>
                Details
              </span>
            </div>
          </div>
        </div>

        {/* Form Card with Glassmorphism Effect */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-emerald-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-textPrimary uppercase tracking-wide">
                      <span className="text-primary">📕</span> Book Title
                    </label>
                    <Input 
                      name="title" 
                      value={form.title} 
                      onChange={handleChange} 
                      placeholder="e.g., The Great Gatsby"
                      className="border-2 border-gray-200 focus:border-primary rounded-xl px-4 py-3 transition-all"
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-textPrimary uppercase tracking-wide">
                      <span className="text-primary">✍️</span> Author
                    </label>
                    <Input 
                      name="author" 
                      value={form.author} 
                      onChange={handleChange}
                      placeholder="e.g., F. Scott Fitzgerald"
                      className="border-2 border-gray-200 focus:border-primary rounded-xl px-4 py-3 transition-all"
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-bold text-textPrimary uppercase tracking-wide">
                        <span className="text-primary">📚</span> Category
                      </label>
                      <Input 
                        name="category" 
                        value={form.category} 
                        onChange={handleChange}
                        placeholder="Fiction, Self-help..."
                        className="border-2 border-gray-200 focus:border-primary rounded-xl px-4 py-3 transition-all"
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-bold text-textPrimary uppercase tracking-wide">
                        <span className="text-primary">📍</span> City
                      </label>
                      <Input 
                        name="city" 
                        value={form.city} 
                        onChange={handleChange}
                        placeholder="Your city"
                        className="border-2 border-gray-200 focus:border-primary rounded-xl px-4 py-3 transition-all"
                        required 
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="button" 
                    variant="primary" 
                    className="w-full mt-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-emerald-700 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300" 
                    onClick={handleNext}
                  >
                    Continue to Details →
                  </Button>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-textPrimary uppercase tracking-wide">
                      <span className="text-primary">⭐</span> Condition
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {["New", "Used"].map((cond) => (
                        <button
                          key={cond}
                          type="button"
                          onClick={() => setForm({ ...form, condition: cond })}
                          className={`relative p-4 rounded-xl border-2 font-semibold transition-all duration-300 ${
                            form.condition === cond
                              ? "border-primary bg-primary/5 text-primary shadow-lg scale-105"
                              : "border-gray-200 text-gray-600 hover:border-gray-300"
                          }`}
                        >
                          <div className="text-2xl mb-1">{cond === "New" ? "✨" : "📖"}</div>
                          {cond}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-textPrimary uppercase tracking-wide">
                      <span className="text-primary">📸</span> Book Cover
                    </label>
                    <div className="relative group/upload">
                      <input 
                        type="file" 
                        name="image" 
                        accept="image/*" 
                        onChange={handleChange}
                        className="hidden"
                        id="image-upload"
                      />
                      <label 
                        htmlFor="image-upload" 
                        className="block cursor-pointer"
                      >
                        {preview ? (
                          <div className="relative rounded-2xl overflow-hidden border-2 border-primary shadow-xl">
                            <img 
                              src={preview} 
                              alt="Preview" 
                              className="w-full h-72 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/upload:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white font-semibold bg-primary/90 px-6 py-3 rounded-full">
                                Change Image
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="border-3 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-primary hover:bg-primary/5 transition-all duration-300 group-hover/upload:scale-[1.02]">
                            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                              <span className="text-5xl">📚</span>
                            </div>
                            <p className="text-textPrimary font-semibold mb-2">Upload Book Cover</p>
                            <p className="text-textSecondary text-sm">Click or drag to upload</p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-textPrimary uppercase tracking-wide">
                      <span className="text-primary">🌍</span> Visibility
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {["Nationwide", "City-only"].map((vis) => (
                        <button
                          key={vis}
                          type="button"
                          onClick={() => setForm({ ...form, visibility: vis })}
                          className={`relative p-4 rounded-xl border-2 font-semibold transition-all duration-300 ${
                            form.visibility === vis
                              ? "border-primary bg-primary/5 text-primary shadow-lg scale-105"
                              : "border-gray-200 text-gray-600 hover:border-gray-300"
                          }`}
                        >
                          <div className="text-2xl mb-1">{vis === "Nationwide" ? "🌐" : "🏙️"}</div>
                          {vis}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <Button 
                      type="button" 
                      variant="ghost" 
                      className="flex-1 py-4 text-lg font-semibold border-2 border-gray-300 hover:border-gray-400 rounded-xl transition-all" 
                      onClick={handlePrev}
                    >
                      ← Back
                    </Button>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="flex-1 py-4 text-lg font-semibold bg-gradient-to-r from-accent to-orange-500 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                    >
                      Submit Book ✓
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl mb-2">🔒</div>
            <p className="text-sm font-semibold text-textPrimary">Secure</p>
            <p className="text-xs text-textSecondary">Safe transactions</p>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-sm font-semibold text-textPrimary">Fast</p>
            <p className="text-xs text-textSecondary">Quick approval</p>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-2">🤝</div>
            <p className="text-sm font-semibold text-textPrimary">Trusted</p>
            <p className="text-xs text-textSecondary">1000+ users</p>
          </div>
        </div>
      </div>
      
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="text-center p-8">
          <div className="relative inline-flex mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-orange-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-accent to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-5xl">🎉</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-textPrimary mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Awesome!
          </h3>
          <p className="text-textSecondary text-lg mb-2">Your book has been submitted</p>
          <p className="text-textSecondary mb-8">Our admin team will review it shortly</p>
          <Button 
            variant="accent" 
            onClick={() => setShowModal(false)} 
            className="px-10 py-3 text-lg font-semibold bg-gradient-to-r from-accent to-orange-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Got it! 👍
          </Button>
        </div>
      </Modal>
    </MainLayout>
  );
}