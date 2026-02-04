// Dark Mode Toggle
function initDarkMode() {
	const darkModeToggle = document.getElementById('darkModeToggle');
	const htmlElement = document.documentElement;

	// Check if dark mode preference is saved in localStorage
	const isDarkMode = localStorage.getItem('darkMode') === 'true';
	if (isDarkMode) {
		document.body.classList.add('dark-mode');
		if (darkModeToggle) darkModeToggle.innerHTML = '☀️';
	}

	// Toggle dark mode on button click
	if (darkModeToggle) {
		darkModeToggle.addEventListener('click', function () {
			document.body.classList.toggle('dark-mode');
			const isNowDark = document.body.classList.contains('dark-mode');
			localStorage.setItem('darkMode', isNowDark);
			darkModeToggle.innerHTML = isNowDark ? '☀️' : '🌙';
		});
	}
}

// Initialize dark mode when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
	initDarkMode();
}
