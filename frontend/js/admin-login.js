// Admin Login Modal Handler
import { loginAdmin, logoutAdmin, checkAuth } from '../../backend/api/auth.js';

document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('adminLoginBtn');
    const modal = document.getElementById('adminLoginModal');
    const closeBtn = document.querySelector('.close-modal');
    const loginForm = document.getElementById('adminLoginForm');
    const errorDiv = document.getElementById('loginError');

    // Open modal
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            errorDiv.style.display = 'none';
            loginForm.reset();
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            errorDiv.style.display = 'none';
            loginForm.reset();
        }
    });

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = document.getElementById('adminEmail').value;
            const password = document.getElementById('adminPassword').value;
            const submitBtn = loginForm.querySelector('.btn-submit');
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
            errorDiv.style.display = 'none';
            
            try {
                const result = await loginAdmin(email, password);
                
                if (result.success) {
                    // Success - redirect to admin dashboard
                    alert('Login successful! Welcome, ' + result.user.email);
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    loginForm.reset();
                    
                    // Redirect to admin panel (create this page later)
                    window.location.href = 'admin-dashboard.html';
                } else {
                    // Show error
                    errorDiv.textContent = result.error || 'Login failed. Please try again.';
                    errorDiv.style.display = 'block';
                }
            } catch (error) {
                errorDiv.textContent = 'An unexpected error occurred. Please try again.';
                errorDiv.style.display = 'block';
                console.error('Login error:', error);
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
            }
        });
    }

    // Check authentication status on page load
    checkAuthStatus();
});

async function checkAuthStatus() {
    const result = await checkAuth();
    
    if (result.authenticated) {
        const loginBtn = document.getElementById('adminLoginBtn');
        if (loginBtn) {
            loginBtn.innerHTML = '<i class="fas fa-user-check"></i> Admin Panel';
            loginBtn.onclick = function() {
                window.location.href = 'admin-dashboard.html';
            };
        }
    }
}

// Handle ESC key to close modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('adminLoginModal');
        if (modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.getElementById('adminLoginForm').reset();
            document.getElementById('loginError').style.display = 'none';
        }
    }
});
