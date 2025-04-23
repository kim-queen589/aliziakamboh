// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Sample recent stories data (in a real application, this would come from a backend)
const sampleStories = [
    {
        title: "My First Day as a Teacher",
        author: "Jane Doe",
        category: "Teaching Moments",
        preview: "I'll never forget the mixture of excitement and nervousness as I stepped into my classroom for the first time...",
        image: "images/story1.jpg"
    },
    {
        title: "How I Overcame Exam Anxiety",
        author: "John Smith",
        category: "Student Life",
        preview: "After years of struggling with test anxiety, I finally found a method that worked for me...",
        image: "images/story2.jpg"
    },
    {
        title: "From Failure to Success",
        author: "Sarah Wilson",
        category: "Motivation",
        preview: "Failing my first semester taught me valuable lessons about perseverance and study habits...",
        image: "images/story3.jpg"
    }
];

// Function to create story cards
function createStoryCard(story) {
    return `
        <div class="story-card">
            <div class="story-image">
                <img src="${story.image}" alt="${story.title}" onerror="this.src='images/default-story.jpg'">
            </div>
            <div class="story-content">
                <h3>${story.title}</h3>
                <p class="story-meta">By ${story.author} | ${story.category}</p>
                <p class="story-preview">${story.preview}</p>
                <a href="#" class="btn primary">Read More</a>
            </div>
        </div>
    `;
}

// Load recent stories
const storiesContainer = document.getElementById('recent-stories');
if (storiesContainer) {
    storiesContainer.innerHTML = sampleStories.map(story => createStoryCard(story)).join('');
}

// Form validation (for contact and share story forms)
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (isValid) {
                // In a real application, this would submit to a backend
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
}

// Initialize form validation for contact and share story forms
document.addEventListener('DOMContentLoaded', () => {
    validateForm('contact-form');
    validateForm('share-story-form');
});
