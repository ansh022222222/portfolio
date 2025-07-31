
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
          <li><a href="#" id="about-btn">About</a></li>
          <li><a href="#" id="skills-btn">Skills</a></li>
          <li><a href="#" id="projects-btn">Projects</a></li>
          <li><a href="#" id="education-btn">Education</a></li>
          <li><a href="#" id="contact-btn">Contact</a></li>
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
      
      
      document.getElementById('about-section').innerHTML = `<section class='about-section section-card'><div class='about-flex'><img src='profile.png' alt='Profile' class='about-img animated-img'><div><h2>About Me</h2><p class='about-paragraph' onclick="this.classList.remove('fade-up'); void this.offsetWidth; this.classList.add('fade-up');"> A hardworking and enthusiastic Bachelor-level IT student with a strong passion for learning and growth. A quick learner with a strong interest in technology, constantly seeking new challenges and opportunities to improve skills. Seeking role in a reputed organisation to apply knowledge, build confidence, and develop professionally to reach full potential. </p></div></div></section>`;
      document.getElementById('skills-section').innerHTML = `<section id='skills-section' class='skills-section section-card'><h2>Skills</h2><div class='skills-grid'><div class='skill-item'><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' alt='Kotlin'><span>Kotlin</span></div><div class='skill-item'><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' alt='HTML'><span>HTML</span></div><div class='skill-item'><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' alt='CSS'><span>CSS</span></div><div class='skill-item'><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='JavaScript'><span>JavaScript</span></div><div class='skill-item'><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' alt='Python'><span>Python</span></div><div class='skill-item'><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' alt='SQL'><span>SQL</span></div><div class='skill-item'><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' alt='AI'><span>AI/ML</span></div></div></section>`;
             document.getElementById('projects-section').innerHTML = `<section id='projects' class='projects-section section-card'><h2>Projects</h2><div class='project'><h3>Mealmeat App</h3><p class='projects-paragraph' onclick="this.classList.remove('fade-up'); void this.offsetWidth; this.classList.add('fade-up');">This is my assignment project as this is all about the meal planning where we can create the recipe, plan the meal according to our wish and this app also shows the ingredient and location where that ingredient are available.</p></div><div class='project'><h3>SecureAuthSystem</h3><p class='projects-paragraph' onclick="this.classList.remove('fade-up'); void this.offsetWidth; this.classList.add('fade-up');">A comprehensive web-based authentication system featuring Multi-Factor Authentication (MFA), secure login protocols, and captcha verification. This project implements advanced security measures including two-factor authentication, encrypted session management, and bot protection through captcha challenges to ensure robust user account security. Additional features include password hashing with bcrypt, session timeout management, XSS protection, and secure session handling.</p></div><div class='project'><h3>Job Portal</h3><p class='projects-paragraph' onclick="this.classList.remove('fade-up'); void this.offsetWidth; this.classList.add('fade-up');">This is my assignment project.</p></div><div class='project'><h3>Breast Cancer Prediction</h3><p class='projects-paragraph' onclick="this.classList.remove('fade-up'); void this.offsetWidth; this.classList.add('fade-up');">A machine learning project that uses data analysis and predictive modeling to detect breast cancer patterns and provide early diagnosis predictions.</p></div></section>`;
      document.getElementById('education-section').innerHTML = `<section id='education-section' class='education-section section-card'><h2>Education</h2><ul class='education-list'><li class='education-paragraph' onclick="this.classList.remove('fade-up'); void this.offsetWidth; this.classList.add('fade-up');"><strong>Bachelor</strong><br>International School of Management and Technology<br>Apr, 2023 - Present</li></ul></section>`;
      document.getElementById('contact-section').innerHTML = `<section id='contact-section' class='contact-section section-card'><h2>Contact Me</h2><p class='contact-paragraph' onclick="this.classList.remove('fade-up'); void this.offsetWidth; this.classList.add('fade-up');">Email: <a href='mailto:anshu205902@gmail.com'>anshu205902@gmail.com</a></p><p class='contact-paragraph' onclick="this.classList.remove('fade-up'); void this.offsetWidth; this.classList.add('fade-up');">Phone: +977-9861218479</p><p class='contact-paragraph' onclick="this.classList.remove('fade-up'); void this.offsetWidth; this.classList.add('fade-up');">LinkedIn: <a href='https://www.linkedin.com/in/anshu-shrestha-2a0726317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'>Ansu Shrestha</a></p><p class='contact-paragraph' onclick="this.classList.remove('fade-up'); void this.offsetWidth; this.classList.add('fade-up');">GitHub: <a href='https://github.com/ansh022222222' target='_blank'>Ansu Shrestha</a></p><p class='contact-paragraph' onclick="this.classList.remove('fade-up'); void this.offsetWidth; this.classList.add('fade-up');">Instagram: <a href='https://www.instagram.com/anshu.shrestha_?igsh=MTJpMmJvOHJ0dWpweA%3D%3D&utm_source=qr' target='_blank'>Ansu Shrestha</a></p><a href='Ansu-Shrestha-CV.pdf' class='btn'>Download CV</a></section>`;
      
   
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
