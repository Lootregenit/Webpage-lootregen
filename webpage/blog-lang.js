// ═══════════════════════════════════════════════════════════
// LOOTREGEN BLOG — LANGUAGE + THEME SWITCHER
// © 2026 Lootregen (Mateusz Mirosław Woźniak) · lootregen.com
// Shares the SAME localStorage keys as the main site:
//   'lang'  → 'en' | 'de' | 'pl'   (which .lang-* spans are visible)
//   'theme' → 'dark' | 'light'     (html[data-theme] attribute)
// So switching language/theme on index.html carries over to the
// blog and vice versa.
// ═══════════════════════════════════════════════════════════

// Apply saved language immediately (before first paint)
(function(){
  var saved = localStorage.getItem('lang') || 'en';
  if (['en','de','pl'].indexOf(saved) === -1) saved = 'en';
  document.documentElement.setAttribute('data-lang', saved);
  document.documentElement.lang = saved;
})();
function setLang(lang){
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;
  var btns = document.querySelectorAll('.lbtn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.toggle('active', btns[i].getAttribute('data-lang') === lang);
  }
}
document.addEventListener('DOMContentLoaded', function(){
  var lang = document.documentElement.getAttribute('data-lang');
  var btns = document.querySelectorAll('.lbtn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.toggle('active', btns[i].getAttribute('data-lang') === lang);
  }
});

// Theme (shares the main site's 'theme' setting)
(function(){
  var t = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
})();
function toggleBlogTheme(){
  var isLight = document.documentElement.getAttribute('data-theme') === 'light';
  var next = isLight ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  var b = document.getElementById('tbtn');
  if (b) b.textContent = next === 'light' ? '\u263D' : '\u2600';
}
document.addEventListener('DOMContentLoaded', function(){
  var b = document.getElementById('tbtn');
  if (b) b.textContent = (document.documentElement.getAttribute('data-theme') === 'light') ? '\u263D' : '\u2600';
});
