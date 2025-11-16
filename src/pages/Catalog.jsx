import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import BookCard from "../components/BookCard";
import Input from "../components/Input";
import Badge from "../components/Badge";
import useMockBooks from "../hooks/useMockBooks";

const categories = ["Self-help", "Fiction", "Non-fiction"];
const cities = ["Karachi", "Lahore", "Islamabad"];
const conditions = ["New", "Used"];

export default function Catalog() {
  const { books } = useMockBooks();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [condition, setCondition] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const filteredBooks = books.filter(book =>
    (!search || book.title.toLowerCase().includes(search.toLowerCase())) &&
    (!category || book.category === category) &&
    (!city || book.city === city) &&
    (!condition || book.condition === condition)
  );

  const activeFiltersCount = [category, city, condition].filter(Boolean).length;

  return (
    <MainLayout>
      {/* Hero Section with Animated Gradient */}
      <div className="relative -mx-6 -mt-6 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-teal-700 to-emerald-800"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0aDR2NGgtNHptMCAxMGg0djRoLTR6bS0xMCAwaDR2NGgtNHptLTEwIDBoNHY0aC00em0yMCAxMGg0djRoLTR6bTEwIDBoNHY0aC00em0tMjAgMGg0djRoLTR6bS0xMCAwaDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">{books.length}+ Books Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Discover Your Next
              <span className="block bg-gradient-to-r from-accent via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Great Read
              </span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Browse through our community's collection and find books that inspire you
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto mb-12">
        {/* Search Bar */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <span className="text-2xl">🔍</span>
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search by title, author, or keyword..."
                  className="w-full pl-14 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl text-textPrimary placeholder-textSecondary focus:outline-none focus:bg-white focus:border-primary transition-all text-lg"
                />
              </div>
              
              {/* View Mode Toggle */}
              <div className="hidden md:flex gap-2 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-primary shadow-soft"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zM11 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zM11 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/>
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-white text-primary shadow-soft"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-card p-6 border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-textPrimary flex items-center gap-2">
              <span>🎯</span> Filters
              {activeFiltersCount > 0 && (
                <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </h3>
            
            {activeFiltersCount > 0 && (
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("");
                  setCity("");
                  setCondition("");
                }}
                className="text-error text-sm font-semibold hover:underline flex items-center gap-1"
              >
                <span>✕</span> Clear All
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-xs font-bold text-textSecondary uppercase tracking-wide mb-2">
                Category
              </label>
              <select 
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white text-textPrimary focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer" 
                value={category} 
                onChange={e => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            {/* City Filter */}
            <div>
              <label className="block text-xs font-bold text-textSecondary uppercase tracking-wide mb-2">
                Location
              </label>
              <select 
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white text-textPrimary focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer" 
                value={city} 
                onChange={e => setCity(e.target.value)}
              >
                <option value="">All Cities</option>
                {cities.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Condition Buttons */}
            <div>
              <label className="block text-xs font-bold text-textSecondary uppercase tracking-wide mb-2">
                Condition
              </label>
              <div className="flex gap-2">
                {conditions.map(cond => (
                  <button
                    key={cond}
                    onClick={() => setCondition(condition === cond ? "" : cond)}
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all border-2 ${
                      condition === cond
                        ? "bg-primary text-white border-primary shadow-lg scale-105"
                        : "bg-white text-textPrimary border-gray-200 hover:border-primary"
                    }`}
                  >
                    {cond === "New" ? "✨" : "📖"} {cond}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-textPrimary">
              {search ? "Search Results" : "All Books"}
            </h2>
            <div className="px-4 py-2 bg-primary/10 text-primary rounded-full">
              <span className="font-bold">{filteredBooks.length}</span>
              <span className="text-sm ml-1">books</span>
            </div>
          </div>

          {/* Sort Dropdown */}
          <select className="px-4 py-2 border-2 border-gray-200 rounded-xl text-sm font-medium text-textPrimary focus:outline-none focus:border-primary transition-all cursor-pointer">
            <option>Sort by: Latest</option>
            <option>Sort by: Popular</option>
            <option>Sort by: Title</option>
          </select>
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
          }>
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <span className="text-5xl">📚</span>
            </div>
            <h3 className="text-2xl font-bold text-textPrimary mb-2">No books found</h3>
            <p className="text-textSecondary mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("");
                setCity("");
                setCondition("");
              }}
              className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="mt-16 relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-orange-500"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTRoNHY0aC00em0wIDEwaDR2NGgtNHptLTEwIDBoNHY0aC00em0tMTAgMGg0djRoLTR6bTIwIDEwaDR2NGgtNHptMTAgMGg0djRoLTR6bS0yMCAxMGg0djRoLTR6bS0xMCAxMGg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative px-8 py-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-3">
            Have books to share?
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            Upload your books and earn points to exchange with others
          </p>
          <a
            href="/upload"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <span>📚</span> Upload Your Book
          </a>
        </div>
      </div>
    </MainLayout>
  );
}