"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('foundation-signup');
    const message = document.getElementById('message');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const fullName = formData.get('fullName');
            // In a real application, we would handle the payment and server-side processing here.
            // For this fake foundation, we'll just show a success message.
            if (message) {
                message.textContent = `Thank you, ${fullName}! Your $1,000 donation has been received. Your 3 Amigos certificate and pin are on their way!`;
                message.style.display = 'block';
                message.style.color = '#2e7d32';
                form.reset();
            }
        });
    }
});
