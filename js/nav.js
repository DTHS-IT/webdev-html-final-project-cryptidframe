(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function () {
    var button = document.querySelector('.nav-panel-button');
    var container = document.querySelector('.nav-container');

    if (!button || !container) {
      return;
    }

    button.setAttribute('aria-controls', 'nav-bar');
    button.setAttribute('aria-expanded', 'false');

    function toggleNav() {
      var opened = container.classList.toggle('nav-open');
      button.setAttribute('aria-expanded', opened ? 'true' : 'false');
    }

    button.addEventListener('click', function (e) {
      e.preventDefault();
      toggleNav();
    });

    button.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleNav();
      }
    });
  });
})();
