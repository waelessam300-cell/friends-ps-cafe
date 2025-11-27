
document.addEventListener('DOMContentLoaded', function(){
  // simple scroll reveal for elements with class .fade-in
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('show');
        obs.unobserve(e.target);
      }
    });
  }, {threshold: 0.15});
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));

  // Optional: smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const tar = document.querySelector(this.getAttribute('href'));
      if(tar) tar.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
