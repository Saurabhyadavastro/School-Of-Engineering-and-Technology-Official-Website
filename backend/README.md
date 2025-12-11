# Backend Setup Guide

## Supabase Configuration

### 1. Create a Supabase Project
1. Go to [Supabase](https://supabase.com) and create an account
2. Create a new project
3. Note down your project URL and anon key

### 2. Setup Admin Users Table
Run this SQL in your Supabase SQL Editor:

```sql
-- Create admin_users table
CREATE TABLE admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT,
    role TEXT DEFAULT 'admin',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    UNIQUE(user_id)
);

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to read their own data
CREATE POLICY "Users can read own admin profile"
    ON admin_users FOR SELECT
    USING (auth.uid() = user_id);

-- Create policy for service role to insert/update
CREATE POLICY "Service role can manage admin users"
    ON admin_users FOR ALL
    USING (auth.role() = 'service_role');
```

### 3. Configure Environment Variables
1. Copy `.env.example` to `.env`
2. Fill in your Supabase credentials:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

### 4. Add Admin Users
In Supabase Dashboard:
1. Go to Authentication → Users
2. Add a new user (email/password)
3. Copy the user's UUID
4. Run this SQL to make them an admin:
   ```sql
   INSERT INTO admin_users (user_id, email, full_name, role)
   VALUES ('user-uuid-here', 'admin@example.com', 'Admin Name', 'admin');
   ```

### 5. Update Frontend Configuration
Update `backend/config/supabase.js` with your actual Supabase URL and anon key.

## API Functions

### Authentication (`backend/api/auth.js`)
- `loginAdmin(email, password)` - Admin login
- `logoutAdmin()` - Admin logout
- `checkAuth()` - Check authentication status

## Security Notes
- Never commit `.env` file to git
- Use environment variables for sensitive data
- Enable Row Level Security on all tables
- Regularly rotate API keys
