# Chanthaburi Technical College Website

A modern, responsive website clone of Chanthaburi Technical College (วิทยาลัยเทคนิคจันทบุรี) built with HTML, CSS, and JavaScript.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**: Image slider, mobile navigation, form validation, and scroll effects
- **Accessibility**: Semantic HTML, ARIA attributes, and keyboard navigation support
- **Performance Optimized**: Lazy loading images, efficient CSS, and optimized JavaScript

## 📁 Project Structure

```
/
├── index.html              # Homepage
├── about.html              # About page
├── news.html               # News & announcements page
├── contact.html            # Contact page with form
├── README.md               # Project documentation
└── assets/
    ├── css/
    │   └── style.css       # Main stylesheet
    └── js/
        └── main.js         # JavaScript functionality
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for best experience)

### Installation

1. **Clone or download** this repository to your local machine
2. **Navigate** to the project directory
3. **Open** `index.html` in your web browser, or
4. **Serve** the files using a local web server for the best experience

### Using a Local Server

#### Option 1: Python (if installed)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 2: Node.js (if installed)
```bash
npx serve .
```

#### Option 3: PHP (if installed)
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📱 Pages Overview

### Homepage (`index.html`)
- Hero slider with rotating images
- About section overview
- Latest news cards
- Call-to-action sections

### About Page (`about.html`)
- College history and heritage
- Mission, vision, and values
- Academic programs overview
- Facilities showcase
- Statistics and achievements

### News Page (`news.html`)
- Featured news article
- News grid with multiple articles
- Pagination
- Newsletter signup

### Contact Page (`contact.html`)
- Contact form with validation
- Contact information
- Campus location details
- FAQ section
- Emergency contact information

## 🎨 Design Features

### Color Scheme
- Primary: Blue (#2563eb)
- Secondary: Gray (#6b7280)
- Background: White (#ffffff) and Light Gray (#f9fafb)
- Text: Dark Gray (#1f2937, #374151)

### Typography
- Font Family: Inter (Google Fonts)
- Responsive font sizes
- Clear hierarchy with proper heading structure

### Interactive Elements
- **Image Slider**: Auto-rotating hero slider with manual controls
- **Mobile Navigation**: Collapsible menu for mobile devices
- **Form Validation**: Real-time validation for contact forms
- **Hover Effects**: Smooth transitions on cards and buttons
- **Scroll Animations**: Fade-in effects for content sections

## 🛠️ Technical Details

### HTML
- Semantic HTML5 elements
- Proper document structure
- SEO-friendly meta tags
- Accessibility attributes (ARIA labels, alt text)

### CSS
- Mobile-first responsive design
- CSS Grid and Flexbox layouts
- Custom properties for consistent theming
- Smooth animations and transitions
- Print-friendly styles

### JavaScript
- Vanilla JavaScript (no dependencies)
- Modular code structure
- Error handling and fallbacks
- Performance optimizations
- Accessibility considerations

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `assets/css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #6b7280;
    --background-color: #ffffff;
    --text-color: #1f2937;
}
```

### Adding New Pages
1. Create a new HTML file following the existing structure
2. Include the header and footer sections
3. Add navigation links in all pages
4. Update the CSS if needed for new components

### Modifying Content
- **Images**: Replace image URLs in HTML files with your own
- **Text**: Update content directly in HTML files
- **Contact Info**: Modify contact details in all relevant sections

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your site will be deployed automatically

### Traditional Web Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Configure your server to serve static files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. Follow the existing code style
2. Test on multiple browsers and devices
3. Ensure accessibility standards are maintained
4. Update documentation as needed

## 📞 Support

If you encounter any issues or have questions:

1. Check the browser console for JavaScript errors
2. Ensure all files are properly linked
3. Verify that images are loading correctly
4. Test with a local server if experiencing issues

## 🔄 Updates

### Version 1.0.0
- Initial release
- Complete website with 4 pages
- Responsive design
- Interactive features
- Accessibility support

---

**Note**: This is a clone/recreation of the original Chanthaburi Technical College website for educational and demonstration purposes. All content and design elements are created for showcase purposes.
