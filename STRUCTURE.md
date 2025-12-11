# SoET Website - Project Structure

```
soet-website/
│
├── frontend/                  # Frontend Application
│   ├── index.html            # Main homepage
│   │
│   ├── pages/                # All internal pages
│   │   ├── about.html       # About SoET page
│   │   ├── academics.html   # Academic programs
│   │   ├── activities.html  # Student activities
│   │   ├── announcements.html # Latest announcements
│   │   ├── contact.html     # Contact information
│   │   ├── facilities.html  # Campus facilities
│   │   └── syllabus.html    # Course syllabi
│   │
│   ├── css/                  # Stylesheets
│   │   ├── styles.css       # Main stylesheet
│   │   └── admin-login.css  # Admin login modal styles
│   │
│   ├── js/                   # JavaScript files
│   │   ├── script.js        # Main JavaScript
│   │   └── admin-login.js   # Admin authentication handler
│   │
│   └── assets/               # Static assets
│       └── images/          # All images (formerly IMG/)
│           ├── Academics Activities/
│           ├── College Pics/
│           ├── Cultural Activities/
│           ├── Social Activities/
│           ├── Vikram-university_Logo.png
│           ├── Code_D_Code Logo.png
│           └── vikram-university-Photoroom.png
│
├── backend/                  # Backend with Supabase
│   ├── config/
│   │   └── supabase.js      # Supabase client configuration
│   ├── api/
│   │   └── auth.js          # Authentication API (login, logout, checkAuth)
│   ├── .env.example         # Environment variables template
│   └── README.md            # Backend setup instructions
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

- Homepage (/frontend/index.html)
  - About (/frontend/pages/about.html)
  - Academics (/frontend/pages/academics.html)
  - Facilities (/frontend/pages/facilities.html)
  - Activities (/frontend/pages/activities.html)
  - Contact (/frontend/pages/contact.html)
  - Announcements (/frontend/pages/announcements.html)
  - Syllabus (/frontend/pages/syllabus.html)
  - Admin Login (Modal) - Supabase Authentication

## Backend Features

### Authentication System
- **Admin Login**: Secure authentication using Supabase
- **Session Management**: JWT-based sessions
- **Role-Based Access**: Admin users table with RLS policies

### Supabase Integration
- Database: PostgreSQL with Row Level Security
- Authentication: Email/Password
- API: RESTful endpoints for auth operations

## Development

### Frontend
```bash
# Run local server
python -m http.server 8000

# Access at
http://localhost:8000/frontend/
```

### Backend Setup
1. Create Supabase project at https://supabase.com
2. Copy `.env.example` to `.env`
3. Add your Supabase credentials
4. Run SQL setup (see backend/README.md)
5. Update `backend/config/supabase.js` with your project URL and keys

### Admin Login
- Click "Admin Login" button in utility bar
- Enter admin credentials
- Authenticated admins get access to admin dashboard

## Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Supabase (PostgreSQL, Authentication)
- **Hosting**: Static file hosting
- **Version Control**: Git/GitHub
