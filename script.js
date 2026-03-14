
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


window.addEventListener('DOMContentLoaded', function() {
  const exploreBtn = document.getElementById('explore-btn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {

      const nav = document.querySelector('nav');
      nav.innerHTML = `
        <h1>Ansu Shrestha</h1>
        <ul>
          <li><a href="#about-section" id="about-btn">About</a></li>
          <li><a href="#skills-section" id="skills-btn">Skills</a></li>
          <li><a href="#projects-section" id="projects-btn">Projects</a></li>
          <li><a href="#education-section" id="education-btn">Education</a></li>
          <li><a href="#contact-section" id="contact-btn">Contact</a></li>
        </ul>
      `;


      document.getElementById('hero-section').style.display = 'none';
      document.getElementById('explore').style.display = '';
      const grid = document.querySelector('.sections-grid');
      grid.style.display = 'grid';
      const sectionIds = ['about-section', 'skills-section', 'projects-section', 'education-section', 'contact-section'];
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.style.display = '';
          el.classList.remove('section-pop');
        }
      });


      setTimeout(() => {
        const aboutBtn = document.getElementById('about-btn');
        const skillsBtn = document.getElementById('skills-btn');
        const projectsBtn = document.getElementById('projects-btn');
        const educationBtn = document.getElementById('education-btn');
        const contactBtn = document.getElementById('contact-btn');

        function hideAllSections() {
          document.getElementById('hero-section').style.display = 'none';
          document.getElementById('explore').style.display = 'none';
          document.querySelector('.sections-grid').style.display = 'none';
        }

        function showSection(sectionId) {
          hideAllSections();
          grid.style.display = 'grid';
          sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
              el.style.display = '';
              el.classList.remove('section-pop');
            }
          });
          
          const selected = document.getElementById(sectionId);
          if (selected) {
            selected.classList.add('section-pop');
            
            setTimeout(() => {
              const rect = selected.getBoundingClientRect();
              const isMostlyVisible = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
              if (!isMostlyVisible) {
                selected.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }, 200);
          }
        }

        if (aboutBtn) {
          aboutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('about-section');
          });
        }

        if (skillsBtn) {
          skillsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('skills-section');
          });
        }

        if (projectsBtn) {
          projectsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('projects-section');
          });
        }

        if (educationBtn) {
          educationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('education-section');
          });
        }

        if (contactBtn) {
          contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('contact-section');
          });
        }
        
        // Add event listeners for project pop-up effect
        setTimeout(() => {
          const projectDivs = document.querySelectorAll('.project');
          projectDivs.forEach(project => {
            project.addEventListener('click', function() {
              // Remove pop effect from all projects
              projectDivs.forEach(p => p.classList.remove('project-pop'));
              // Add pop effect to clicked project
              this.classList.add('project-pop');
            });
          });
        }, 200);
      }, 100);
    });
  }
});
