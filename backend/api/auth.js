// Authentication API for Admin Login
import { supabaseClient } from '../config/supabase.js';

// Admin login function
async function loginAdmin(email, password) {
    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            console.error('Login error:', error.message);
            return { success: false, error: error.message };
        }

        // Check if user has admin role (you'll need to set this up in Supabase)
        const { data: profile, error: profileError } = await supabaseClient
            .from('admin_users')
            .select('*')
            .eq('user_id', data.user.id)
            .single();

        if (profileError || !profile) {
            await supabaseClient.auth.signOut();
            return { success: false, error: 'Unauthorized: Not an admin user' };
        }

        return { 
            success: true, 
            user: data.user,
            session: data.session,
            profile: profile
        };
    } catch (err) {
        console.error('Login exception:', err);
        return { success: false, error: 'An unexpected error occurred' };
    }
}

// Logout function
async function logoutAdmin() {
    try {
        const { error } = await supabaseClient.auth.signOut();
        if (error) {
            return { success: false, error: error.message };
        }
        return { success: true };
    } catch (err) {
        console.error('Logout exception:', err);
        return { success: false, error: 'An unexpected error occurred' };
    }
}

// Check if user is authenticated
async function checkAuth() {
    try {
        const { data: { session }, error } = await supabaseClient.auth.getSession();
        
        if (error || !session) {
            return { authenticated: false };
        }

        // Verify admin status
        const { data: profile, error: profileError } = await supabaseClient
            .from('admin_users')
            .select('*')
            .eq('user_id', session.user.id)
            .single();

        if (profileError || !profile) {
            return { authenticated: false };
        }

        return { 
            authenticated: true, 
            user: session.user,
            profile: profile
        };
    } catch (err) {
        console.error('Auth check exception:', err);
        return { authenticated: false };
    }
}

export { loginAdmin, logoutAdmin, checkAuth };
