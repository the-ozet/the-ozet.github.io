(function() {
  'use strict';

  let OZET = window.OZET || {};

  OZET.filter = (set, container, test) => {

    let $container = $(container),
        $orig = $container.children(),
        filtered = set.reduce((memo, item) => {
          let el = $orig.toArray().find((el) => test(item, el))
          if (el) {
            memo.push(el)
          }
          return memo;
        }, [])

    $container.empty().html(filtered)
  }

  window.OZET = OZET;
})();
