let sysDark = window.matchMedia('(prefers-color-scheme: dark)');
let darkVal = localStorage.getItem('dark');

function setDark(isDark) {
  document.body.classList[isDark ? 'add' : 'remove']('dark');
  localStorage.setItem('dark', isDark ? 'yes' : 'no');
  if (document.body.classList.contains('not-ready')) {
    requestAnimationFrame(() => document.body.classList.remove('not-ready'));
  }
};

setDark(darkVal ? darkVal === 'yes' : sysDark.matches);

sysDark.addEventListener('change', (event) => setDark(event.matches));

// on change screen
window.addEventListener('resize', onWidonwResize);

function onWidonwResize(){
  if (window.innerWidth > 768){
    document.querySelector('.nav-button').classList.remove('clicked')
  }
}
