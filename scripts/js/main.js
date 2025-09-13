// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Header background change on scroll
window.addEventListener('scroll', function () {
	const header = document.querySelector('header');
	if (window.scrollY > 100) {
		header.style.background = 'rgba(255, 255, 255, 0.98)';
		header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
	} else {
		header.style.background = 'rgba(255, 255, 255, 0.95)';
		header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
	}
});

// Add intersection observer for animations
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.opacity = '1';
			entry.target.style.transform = 'translateY(0)';
		}
	});
}, observerOptions);

// Observe all cards and items for animation
document
	.querySelectorAll(
		'.skill-category, .experience-card, .project-card, .info-card, .achievement-item'
	)
	.forEach((el) => {
		el.style.opacity = '0';
		el.style.transform = 'translateY(30px)';
		el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
		observer.observe(el);
	});

document.addEventListener('DOMContentLoaded', function () {
	var currentYear = new Date().getFullYear();
	document.getElementById('currentYear').textContent = currentYear;
});
