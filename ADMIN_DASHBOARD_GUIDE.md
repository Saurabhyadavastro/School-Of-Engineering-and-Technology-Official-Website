# Admin Dashboard Guide

## Overview
The Admin Dashboard provides a comprehensive interface for managing announcements and student data for the School of Engineering and Technology website.

## Getting Started

### 1. Initial Setup

Before using the admin dashboard, you need to set up the database tables in Supabase:

1. **Login to Supabase**
   - Go to https://supabase.com
   - Login to your project
   - Copy your project URL and anon key

2. **Configure Supabase Connection**
   - Open `backend/config/supabase.js`
   - Replace the placeholder values with your actual Supabase credentials:
   ```javascript
   const SUPABASE_URL = 'your-project-url';
   const SUPABASE_ANON_KEY = 'your-anon-key';
   ```

3. **Create Database Tables**
   - Follow the instructions in `backend/DATABASE_SETUP.md`
   - Run all SQL commands in Supabase SQL Editor
   - This creates tables for: admin_users, announcements, and students

4. **Create Admin User**
   - In Supabase Dashboard, go to Authentication > Users
   - Click "Invite User" or "Add User"
   - Enter admin email and password
   - Then add this email to the `admin_users` table:
   ```sql
   INSERT INTO admin_users (email) VALUES ('your-admin-email@example.com');
   ```

### 2. Accessing the Dashboard

1. **Login**
   - Navigate to: `http://localhost:8000/frontend/pages/admin-login.html`
   - Enter your admin credentials (email and password from Supabase Authentication)
   - Click "Sign In"

2. **After Successful Login**
   - You'll be automatically redirected to the admin dashboard
   - The dashboard shows your email in the top-right corner

## Features

### 📢 Announcements Management

The Announcements section allows you to manage all website announcements.

#### Adding a New Announcement

1. Click on **"Announcements"** tab in the dashboard navigation
2. Click **"Add New Announcement"** button
3. Fill in the form:
   - **Title**: Enter announcement title
   - **Category**: Select from:
     - Admission
     - Exam
     - Event
     - Notice
     - Important
   - **Description**: Enter detailed announcement text
   - **Date**: Select the announcement date
   - **Link (Optional)**: Add external link if needed
4. Click **"Save"** to add the announcement

#### Editing an Announcement

1. Find the announcement you want to edit
2. Click the **Edit** button (yellow pencil icon)
3. Update the form fields
4. Click **"Save"** to update

#### Deleting an Announcement

1. Find the announcement you want to delete
2. Click the **Delete** button (red trash icon)
3. Confirm the deletion in the popup
4. The announcement will be permanently removed

### 👨‍🎓 Students Management

The Students section allows you to manage student data organized by branch and semester.

#### Viewing Students

1. Click on **"Students"** tab in the dashboard navigation
2. All students are listed with their details
3. Use filters to narrow down results:
   - **Branch Filter**: Select specific branch (CS, Mechanical, etc.)
   - **Semester Filter**: Select specific semester (1-8)
   - Click **"Apply Filter"** to update the list

#### Adding a New Student

1. Click **"Add New Student"** button
2. Fill in all required fields:
   - **Full Name**: Student's complete name
   - **Enrollment No.**: Unique enrollment number (e.g., 2024CS001)
   - **Email**: Student's email address
   - **Phone**: Contact number with country code
   - **Branch**: Select from 6 engineering branches
   - **Semester**: Select current semester (1-8)
   - **Address (Optional)**: Student's residential address
3. Click **"Save"** to add the student

#### Editing a Student

1. Find the student you want to edit
2. Click the **Edit** button (yellow pencil icon)
3. Update the form fields as needed
4. Click **"Save"** to update

#### Deleting a Student

1. Find the student you want to delete
2. Click the **Delete** button (red trash icon)
3. Confirm the deletion in the popup
4. The student record will be permanently removed

## Branch Options

The system supports 6 engineering branches:
- Computer Science & Engineering
- Electronics & Communication
- Mechanical Engineering
- Civil Engineering
- Electrical Engineering
- Information Technology

## Data Organization

### Students are organized by:
1. **Branch**: Department/specialization
2. **Semester**: Current semester (1 to 8)

This structure allows easy filtering and management of students based on their academic year and department.

## Security Features

✅ **Authentication Required**: Only logged-in admins can access the dashboard
✅ **Row Level Security**: Supabase RLS ensures data protection
✅ **Auto-Logout**: Session management for security
✅ **Secure Forms**: All inputs are validated

## Tips & Best Practices

### For Announcements:
- Use clear, concise titles
- Choose appropriate categories for better organization
- Keep descriptions informative but brief
- Add external links when additional information is available
- Set accurate dates for proper chronological ordering

### For Students:
- Use consistent enrollment number format (e.g., YearBranchNumber)
- Verify email addresses before adding
- Keep phone numbers in standard format (+91 XXXXXXXXXX)
- Update semester information at the start of each academic term
- Use filters to quickly find students by branch and semester

## Troubleshooting

### Cannot Login
- Verify your email and password in Supabase Authentication
- Check if your email is added to the `admin_users` table
- Clear browser cache and try again

### Data Not Loading
- Check internet connection
- Verify Supabase configuration in `backend/config/supabase.js`
- Check browser console for errors (F12)
- Ensure tables are created in Supabase

### Cannot Add/Edit Records
- Verify you're logged in (check email in top-right corner)
- Check all required fields are filled
- Ensure enrollment numbers are unique
- Check browser console for specific errors

### Changes Not Appearing
- Refresh the page (F5)
- Check if the save was successful (look for success notification)
- Verify data in Supabase table editor

## Browser Requirements

The admin dashboard works best with modern browsers:
- Chrome (recommended)
- Firefox
- Edge
- Safari

## Mobile Access

The dashboard is fully responsive and can be accessed from:
- Desktop computers (recommended for extensive data entry)
- Tablets (good for viewing and quick edits)
- Mobile phones (viewing and simple edits)

## Keyboard Shortcuts

- **Esc**: Close any open modal
- **Ctrl + S**: Save form (when form is focused)
- **Tab**: Navigate between form fields

## Support

For technical issues or questions:
- Check `backend/DATABASE_SETUP.md` for database setup
- Review Supabase documentation: https://supabase.com/docs
- Check browser console for error messages (F12)

## Future Enhancements

Potential features for future updates:
- Bulk student upload via CSV
- Advanced search and filtering
- Student attendance tracking
- Grade management
- Email notifications for announcements
- Export data to Excel/PDF
- Analytics dashboard

---

**Last Updated**: December 12, 2025
**Version**: 1.0
**Author**: SoET Development Team
