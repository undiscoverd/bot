/* assets/js/script.js */

/* ---------- Scroll reveal / fade-in ---------- */
document.addEventListener('DOMContentLoaded', function(){
  const revealElems = document.querySelectorAll('.fade-in, .reveal-list');
  const options = { threshold: 0.12 };
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  }, options);
  revealElems.forEach(el => obs.observe(el));
});

/* ---------- Simple Slideshow (products page) ---------- */
function startSlideshow(containerId, interval = 3000){
  const container = document.getElementById(containerId);
  if(!container) return;
  const slides = container.querySelectorAll('.slide');
  let idx = 0;
  function show(i){
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
  }
  show(idx);
  setInterval(()=>{
    idx = (idx + 1) % slides.length;
    show(idx);
  }, interval);
}

/* ---------- Lightbox gallery ---------- */
function setupLightbox(){
  const grid = document.querySelectorAll('.gallery-grid img');
  const lb = document.getElementById('lightbox');
  const lbimg = document.getElementById('lightbox-img');
  if(!lb) return;
  grid.forEach(img=>{
    img.addEventListener('click', (e)=>{
      lbimg.src = e.target.src;
      lb.classList.add('show');
    });
  });
  lb.addEventListener('click', (e)=>{
    if(e.target.id === 'lightbox' || e.target.id === 'lightbox-img') {
      lb.classList.remove('show');
    }
  });
}

/* Initialize components on DOM load */
document.addEventListener('DOMContentLoaded', function(){
  // start slideshow if present
  startSlideshow('prodSlideshow', 4000);
  setupLightbox();
});
