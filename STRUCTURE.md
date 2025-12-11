# SoET Website - Project Structure

```
soet-website/
│
├── index.html                 # Main homepage
│
├── pages/                     # All internal pages
│   ├── about.html            # About SoET page
│   ├── academics.html        # Academic programs
│   ├── activities.html       # Student activities
│   ├── announcements.html    # Latest announcements
│   ├── contact.html          # Contact information
│   ├── facilities.html       # Campus facilities
│   └── syllabus.html         # Course syllabi
│
├── css/                      # Stylesheets
│   └── styles.css           # Main stylesheet
│
├── js/                       # JavaScript files
│   └── script.js            # Main JavaScript
│
├── assets/                   # Static assets
│   └── images/              # All images (formerly IMG/)
│       ├── Academics Activities/
│       ├── College Pics/
│       ├── Cultural Activities/
│       ├── Social Activities/
│       ├── Vikram-university_Logo.png
│       ├── Code_D_Code Logo.png
│       └── vikram-university-Photoroom.png
│
├── .github/                  # GitHub Actions
│   └── workflows/
│       └── deploy.yml       # Deployment workflow
│
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
├── robots.txt               # SEO robots file
├── sitemap.xml              # SEO sitemap
└── STRUCTURE.md             # This file

## Navigation Structure

- Homepage (/)
  - About (/pages/about.html)
  - Academics (/pages/academics.html)
  - Facilities (/pages/facilities.html)
  - Activities (/pages/activities.html)
  - Contact (/pages/contact.html)
  - Announcements (/pages/announcements.html)
  - Syllabus (/pages/syllabus.html)

## Development

- Run local server: `python -m http.server 8000`
- Access at: `http://localhost:8000`
