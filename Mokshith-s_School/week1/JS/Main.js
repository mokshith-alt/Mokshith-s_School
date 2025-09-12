// Main.js
// This script moves the ball left or right based on mouse clicks
// a lot of youtube was used here

// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => 
    {
        const ball = document.getElementById('ball');
        // Initialize ball event listener
        ball.addEventListener('mousedown', (event) => 
            {// Check which mouse button was clicked
                // 0 = left button, 2 = right button i searched this online
                // for left button
                if (event.button === 0) 
                    { // Left mouse button
                    ball.style.left = (parseInt(ball.style.left) + 20) + 'px';
                    console.log('Moved left');
                    } 
                    // for right button
                else if (event.button === 2) 
                    { // Right mouse button
                    ball.style.left = (parseInt(ball.style.left) - 20) + 'px';
                    console.log('Moved right');
                    }
            }
        );
    }
);