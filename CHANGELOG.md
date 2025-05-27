# Changelog

## [Unreleased]

## [2025-04-23]

### Project Structure
```
creative-tech/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── logos/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── page.tsx
│   └── layout.tsx
├── components/
│   ├── PexelsImage.tsx
│   ├── PortfolioSection.tsx
│   ├── OptimizedImage.tsx
│   └── Testimonials.tsx
├── public/
│   └── images/
│       ├── projects/
│       │   ├── dfre.jpg
│       │   ├── gratuity.jpg
│       │   ├── tic-tac-toe.jpg
│       │   ├── PMI-report.jpg
│       │   ├── finance-platform.jpg
│       │   ├── neurofeedback.jpg
│       │   ├── ecommerce-platform.jpg
│       │   └── name-place.jpg
│       ├── hero/
│       └── clients/
└── CHANGELOG.md
```

### Added
- Created new `PortfolioSection` component for better code reusability
- Added `target="_blank"` and `rel="noopener noreferrer"` to project links
- Added three new project cards:
  - AI-Powered Analytics Dashboard
  - Social Media Management Suite
  - Virtual Event Platform
- Added new "Name Place Animal Thing" project card to portfolio section
- Added name-place.jpg image showing actual game interface for the project card
- Updated Tic Tac Toe project with new game interface screenshot and corrected URL

### Changed
- Updated portfolio card image sizing:
  - Changed grid2 variant to use 16:9 aspect ratio (960x540)
  - Added aspect-video class to maintain consistent ratio
  - Set objectPosition to 'top center' to keep top of images visible
  - Added rounded-t-lg class for consistent card styling
- Refactored portfolio section to be shared between home and portfolio pages
- Updated project card links to open in new tabs
- Fixed PexelsImage import paths to use relative paths
- Updated Mobile Banking App card to showcase Taimur Finance Platform with accurate description and link
- Updated Corporate Website card to showcase Neurofeedback Research platform with relevant details
- Changed portfolio grid layout from 2 to 3 columns on large screens
- Replaced "Social Media Management Suite" project card with "Gratuity Calculator" project in portfolio section
- Added gratuity.jpg image for the new project card
- Replaced "Virtual Event Platform" project with "Layout Creation" project showcasing DFRE work
- Added dfre.jpg image for the new Layout Creation project card
- Reordered portfolio projects to new sequence:
  1. Layout Creation
  2. Gratuity Calculator
  3. Tic Tac Toe Game
  4. PMI Proof of Play
  5. Finance Platform
  6. Neurofeedback Research
  7. E-commerce
- Added consistent ID properties to all portfolio projects for better tracking and accessibility
- Updated all portfolio project descriptions to be more concise (max 4 lines)
- Changed "View Project" button text to "Live Demo" in portfolio cards
- Added line-clamp-4 class to ensure consistent description height
- Standardized all portfolio project descriptions to exactly four lines for consistent presentation
- Updated descriptions to follow a structured format: overview, main features, additional features, and technical highlights
- Updated Layout Creation project with new description focusing on Dubai Municipality assets
- Changed Layout Creation project URL to dfre.netlify.app
- Updated project tags to reflect Dubai Municipality and DFRE focus
- Reduced font sizes in portfolio cards for more compact look:
  - Title: text-xl → text-lg
  - Description: normal → text-sm
  - Tags: text-sm → text-xs
- Adjusted card padding from p-6 to p-4 for better spacing
- Reduced card image height from h-64 to h-48
- Changed grid gap from gap-8 to gap-6 for tighter layout
- Reduced line clamp from 4 to 3 lines for description
- Made "Live Demo" text and icon gap smaller for better alignment

### Improved
- Better code organization with shared components
- Consistent project showcase across the website
- Enhanced user experience with new tab behavior for project links
- Expanded portfolio with diverse project types and technologies
- Improved layout density and visual presentation on larger displays

## [2024-03-19]

### Removed
- Deleted tic-tac-toe.svg file

### Changed
- Updated Tic Tac Toe game image reference from .svg to .png format in portfolio section