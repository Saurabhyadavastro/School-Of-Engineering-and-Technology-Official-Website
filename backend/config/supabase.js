// Supabase Configuration
// Replace these with your actual Supabase project credentials

const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Initialize Supabase client
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { supabaseClient, SUPABASE_URL, SUPABASE_ANON_KEY };
