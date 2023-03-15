const healthBar = document.querySelector('.health-bar');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const percentScrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

  healthBar.style.height = '${100 - percentScrolled}%';
});