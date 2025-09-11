// Use CommonJS to avoid ESM warnings (package.json doesn't set "type": "module").
// Use the official Tailwind PostCSS bridge package.
 module.exports = {
   plugins: [
     require('@tailwindcss/postcss'),
     require('autoprefixer'),
   ],
 };