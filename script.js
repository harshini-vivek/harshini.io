/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});

/* JavaScript for reveal animation */
sr.reveal('.find-me, .languages, .tools', {}); 
  
  // Certificate container animation
  sr.reveal('.certification__container', {
    origin: 'bottom',
    distance: '50px',
    interval: 200
  });
  
  // Project container animation
  sr.reveal('.project__container', {
    origin: 'bottom',
    distance: '50px',
    interval: 200
  });
  
  // Workshop container animation
  sr.reveal('.workshop__container', {
    origin: 'bottom',
    distance: '50px',
    interval: 200
  });
  
  // Internship container animation
  sr.reveal('.internship__container', {
    origin: 'bottom',
    distance: '50px',
    interval: 200
  });

  // Publication container animation
  sr.reveal('.publication__container', {
    origin: 'bottom',
    distance: '50px',
    interval: 200
  });
  
  // Award container animation
  sr.reveal('.award__container', {
    origin: 'bottom',
    distance: '50px',
    interval: 200
  });

  // Education container animation
  sr.reveal('.education__container', {
    origin: 'bottom',
    distance: '50px',
    interval: 200
  });

  // Experience container animation
  sr.reveal('.experience__container', {
    origin: 'bottom',
    distance: '50px',
    interval: 200
  });

const projectContainers = document.querySelectorAll('.project__container');
projectContainers.forEach(container => {
    container.addEventListener('click', () => {
        const projectLink = container.getAttribute('onclick');
        if (projectLink) {
            eval(projectLink);
        }
    });
});

// Add an event listener to open certificate link on click
document.querySelectorAll('.certification__container').forEach(container => {
    container.addEventListener('click', () => {
        const certificateLink = container.getAttribute('data-certificate-link');
        if (certificateLink) {
            window.open(certificateLink);
        }
    });
});


const publications = document.querySelectorAll('.publication__container');

const revealPublication = (entry) => {
  entry.forEach((publication) => {
    if (publication.isIntersecting) {
      publication.target.classList.add('visible');
    }
  });
};

const publicationObserver = new IntersectionObserver(revealPublication, {
  root: null,
  threshold: 0.15,
});

publications.forEach((publication) => {
  publicationObserver.observe(publication);
});

const awards = document.querySelectorAll('.award__container');

const revealAwards = (entry) => {
  entry.forEach((award) => {
    if (award.isIntersecting) {
      award.target.classList.add('visible');
    }
  });
};

const awardObserver = new IntersectionObserver(revealAwards, {
  root: null,
  threshold: 0.15,
});

awards.forEach((award) => {
  awardObserver.observe(award);
});

const awardContainers = document.querySelectorAll('.award__container');
awardContainers.forEach(container => {
    container.addEventListener('click', () => {
        const awardLink = container.getAttribute('onclick');
        if (awardLink) {
            eval(awardLink);
        }
    });
});

// to prevent users from saving images from the page
document.addEventListener('contextmenu', event => {
  event.preventDefault();
});
