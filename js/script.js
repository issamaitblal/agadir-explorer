// Animate cards on scroll
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.location-card');
  
  cards.forEach((card, index) => {
    card.style.setProperty('--order', index);
  });

  // Weather API (example using OpenWeatherMap)
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Agadir&units=metric&APPID=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
      document.querySelector('.weather-icon i').className = getWeatherIcon(data.weather[0].main);
      document.querySelector('.weather-info h3').textContent = data.weather[0].main;
      document.querySelector('.weather-info p').textContent = `${Math.round(data.main.temp)}°C`;
    });
});

function getWeatherIcon(weather) {
  const icons = {
    'Clear': 'fas fa-sun',
    'Clouds': 'fas fa-cloud',
    'Rain': 'fas fa-cloud-rain'
  };
  return icons[weather] || 'fas fa-sun';
}
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for explore button
  document.getElementById('explore-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.locations').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Animation trigger on scroll
  const animateOnScroll = () => {
    const cards = document.querySelectorAll('.location-card');
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if(cardPosition < screenPosition) {
        card.style.opacity = '1';
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Trigger on load
});
