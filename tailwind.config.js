module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C5530",        // Deep Teal
        background: "#FEF9F0",     // Warm Cream
        textPrimary: "#2F2F2F",    // Charcoal
        textSecondary: "#6B7280",  // Medium Grey
        borderColor: "#E5E7EB",    // Light Grey
        accent: "#E07A5F",         // Energetic Coral
        success: "#10B981",        // Success Green
        error: "#EF4444",          // Alert Red
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(44, 85, 48, 0.08)',
        'medium': '0 4px 12px rgba(44, 85, 48, 0.12)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};