window.onscroll = function() {
    var lifeBar = document.getElementById('life-bar');
    var scrollPosition = window.scrollY;
    var maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var lifePercentage = (1 - scrollPosition / maxScroll) * 100;
    lifeBar.style.width = lifePercentage + '%';
  }