// Minimal JS: smooth scrolling, mobile nav toggle, placeholder form feedback

document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href.length > 1){
        var target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
          // If mobile nav open, close it
          closeMobileNav();
        }
      }
    });
  });

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var primaryNav = document.getElementById('primary-nav');
  navToggle.addEventListener('click', function(){
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    primaryNav.classList.toggle('open');
  });

  function closeMobileNav(){
    if(window.innerWidth < 720){
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded','false');
    }
  }

  // Form placeholder feedback
  var sendBtn = document.getElementById('send-btn');
  var note = document.getElementById('placeholder-note');
  sendBtn.addEventListener('click', function(){
    note.hidden = false;
    sendBtn.textContent = 'Sent (demo)';
    setTimeout(function(){
      sendBtn.textContent = 'Send Message';
    }, 2200);
  });

  // Fill current year in footer
  var y = new Date().getFullYear();
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;
});