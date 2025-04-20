# RCD WordPress Website Clone

## Project Overview
This is a static clone of the RCD (Research & Consulting Development) website, focusing on preserving the original design and functionality while allowing for local development and customization.

## Project Structure
rcd-wordpress/
├── home/
│ ├── index.html
│ ├── wp-content/
│ │ └── themes/
│ │ └── rcd/
│ │ ├── assets/
│ │ │ ├── css/
│ │ │ ├── js/
│ │ │ └── images/
│ └── wp-includes/
├── fonts.googleapis.com/
├── ajax.googleapis.com/
├── code.jquery.com/
├── gists.rawgit.com/
├── webpack---/
└── DataURI/

## Features
- Responsive design
- Modern UI/UX
- Interactive components
- Optimized assets
- Cross-browser compatibility

## Technologies Used
- HTML5
- CSS3/SCSS
- JavaScript/jQuery
- WordPress Theme Structure
- Google Fonts
- CDN Integration

## Dependencies
- jQuery 3.5.1
- Google Fonts
- Google Ajax APIs
- RawGit for gists

## Local Development Setup
1. Clone the repository
2. Set up a local server (e.g., using Python's `http.server` or PHP's built-in server)
3. Access the site via `http://localhost:3000`

## Using Python HTTP Server
```bash
python -m http.server 3000
```

## Using PHP Server
```bash
php -S localhost:3000
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Project Status
- [x] Homepage cloned
- [ ] Additional pages pending
- [x] Modal removed
- [x] Overlay removed
- [ ] Dynamic functionality implementation

## Customization
The project allows for easy customization through:
- Modular CSS/SCSS
- Organized JavaScript files
- Asset optimization
- Component-based structure

## Performance Optimization
- Minified CSS and JavaScript
- Optimized images
- CDN usage for better resource loading
- DataURI implementation for small assets

## Known Issues
- Some dynamic WordPress functionality may not work in the static version
- External resources require internet connection
- Form submissions need backend implementation

## Future Improvements
1. Implementation of remaining pages
2. Backend integration
3. Form functionality
4. Dynamic content loading
5. SEO optimization
6. Performance enhancements

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is intended for development and testing purposes only. All rights belong to their respective owners.

## Contact
For any queries or suggestions, please open an issue in the repository.

## Acknowledgments
- Original RCD website design and content
- WordPress community
- Open-source contributors

## Deployment
### Netlify Configuration
The project is configured for Netlify deployment with the following setup:

```toml
[build]
  publish = "home"
  command = "# no build command needed for static files"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deployment Steps
1. Connect repository to Netlify
2. Configure build settings:
   - Build command: leave empty
   - Publish directory: `home`
3. Configure environment variables (if needed)
4. Set up custom domain (optional)

## Recent Updates
- Added Netlify configuration
- Removed modal functionality
- Removed overlay elements
- Updated project structure
- Added comprehensive documentation

## Last Updated
${new Date().toISOString().split('T')[0]}
