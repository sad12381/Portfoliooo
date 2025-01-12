// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Electric shock effect on hover
  const homeSection = document.querySelector('.home-section');
  const electricShock = document.querySelector('.electric-shock');
  
  homeSection.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    electricShock.style.left = `${x}px`;
    electricShock.style.top = `${y}px`;
  });
  
  // Particle effects
  const particlesContainer = document.querySelector('.particles');
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 5 + 2}s`;
    particlesContainer.appendChild(particle);
  }
  
  
  // Animate language progress bars
  document.querySelectorAll('.language-progress').forEach(progress => {
    const width = progress.getAttribute('data-progress');
    progress.style.setProperty('--progress', `${width}%`);
  });
  
  // Flying emojis
  const emojis = ['⚡', '🔧', '💡'];
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    emojis.forEach(emoji => {
      const flyingEmoji = document.createElement('div');
      flyingEmoji.classList.add('flying-emoji');
      flyingEmoji.textContent = emoji;
      flyingEmoji.style.left = `${Math.random() * 100}%`;
      flyingEmoji.style.animationDuration = `${Math.random() * 10 + 10}s`;
      section.appendChild(flyingEmoji);
    });
  });
