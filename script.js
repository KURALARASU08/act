// Function to fetch and display activities
function fetchActivities() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const activityList = document.getElementById('activityList');
            const activities = data.Activities;
            activityList.innerHTML = '<h2>Activities</h2>';
            activities.forEach(activity => {
                activityList.innerHTML += `<p>${activity.activity} (${activity.subject})</p>`;
            });
        });
}

// Function to submit extra activity
function submitActivity() {
    const activity = document.getElementById('activity').value;
    const date = document.getElementById('date').value;
    const subject = document.getElementById('subject').value;
    
    // Update the JSON file or send data to the server (simulated here)
    console.log('Activity submitted:', { activity, date, subject });
    
    alert('Activity submitted successfully!');
    
    // Optionally, redirect or update the welcome page
    location.href = 'index.html';
}

// Set username and fetch activities on page load
document.addEventListener('DOMContentLoaded', () => {
    const username = 'Student'; // Replace with actual user data if available
    document.getElementById('username').textContent = username;

    if (window.location.pathname.endsWith('index.html')) {
        fetchActivities();
    }
});
