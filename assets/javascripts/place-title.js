(function() {
  "use strict";

  console.log("here I am I loaded");

  function testWidth(el, targetWidth) {
    setTimeout(function() {
      if (el.getBoundingClientRect().width < targetWidth) {
        const fontSize = window
          .getComputedStyle(el)
          .getPropertyValue("font-size");
        el.style.fontSize = `${parseInt(fontSize) + 5}px`;
        testWidth(el, targetWidth);
      }
    }, 0);
  }

  function placeTitle() {
    console.log("placeTitle!");
    const h1 = document.getElementsByTagName("h1")[0];
    const { x, width } = h1.getBoundingClientRect();
    const title = document.getElementById("ozet-title");
    const targetWidth = x + width;
    title.style.marginLeft = `-${x}px`;
    testWidth(title, targetWidth);
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      let context = this;
      let args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  document.addEventListener("resize", debounce(placeTitle, 500));

  placeTitle();
})();
