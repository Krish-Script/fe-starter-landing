## Day 1 Progress(14/08/2025)

- Built semantic HTML structure (header, hero, features, footer)
- Responsive single-column layout with CSS Grid
- Added skip link for accessibility

## Day 2 progress(16/08/2025)

- Added hover/active/focus states to the primary button
- Unified spacing and containers across header/hero/ features; tuned hero padding
- Implemented accessible mobile navigation with aria-expanded and Esc to close
- Performed a basic keyboard navigation check and contrast review
- Added lint/format scripts for quick hygiene

## Day 3 progress(21/08/2025)

- Polished desktop navigation: inline links on wide screens, hidden hamburger toggle
- Added keyboard focus and active styles to nav links for usability
- Enabled smooth scrolling for all in-page anchor links
- Added subtle hover effects on feature cards with reduced motion support
- Verified button contrast for better accessibility
- Set up Continuous Integration with GitHub Actions running lint and format checks automatically

## Day 4 progress (07/09/2025)

- Split styles into dedicated component files: button.css, card.css, container.css
- Updated HTML structure so all buttons use .btn, feature sections use .card, and layout blocks use .container
- Began documenting a simple component library for future reuse

## Day 5 progress (07/09/2025)

- Added icons to buttons and feature cards for clearer UI signals.
- Implemented light/dark theme toggle using CSS variables and JavaScript.
- Ensured strong color contrast across both themes for readability.
- Made icons accessible by hiding decorative ones from screen readers.
- Added keyboard focus styles to theme toggle and all buttons for better navigation.
- Verified keyboard and screen reader usability for interactive elements.

## Day 6 progress (07/09/2025)

- Added linting and formatting scripts (eslint and prettier) for consistent code style.
- Set up Husky pre-commit hooks with lint-staged to automatically check and fix code on every commit.
- Updated CI pipeline to run lint and format checks on push and pull requests.
- These improvements maintain code hygiene and reduce manual cleanup.
- Workflow now blocks commits with unresolved errors, ensuring a higher-quality codebase.

## Tech Stack

- HTML5, CSS3 (Grid, Flexbox), Vanilla JS
- Optional tooling: Prettier, ESLint (scripts added)

## How to Run

1. Clone this repo
2. Open `index.html` in your browser

**Live Demo:** https://krish-script.github.io/fe-starter-landing/
