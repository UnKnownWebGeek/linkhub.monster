/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Include all components, pages, etc.
    './public/**/*.html',          // Include static HTML files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default font set to Inter
      },
      colors: {
        // Add custom colors if needed for your project
      },
      spacing: {
        // Custom spacing or padding/margins if needed
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),   // Enables typography utilities
    require('@tailwindcss/forms'),        // Tailwind forms plugin for better form styling
    require('@tailwindcss/aspect-ratio'), // Maintain consistent aspect ratios for elements
    require('@tailwindcss/line-clamp'),   // For truncating text after a number of lines
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // Removed @tailwindcss/line-clamp
  ],
};
