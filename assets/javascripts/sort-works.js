$(document).ready(function() {
    if (!window.WORKS) {
      return;
    }


    // var $works = $('.works-maj, #works-list > div'),
    //     $container = $works.eq(0).parent();

    function renderWorks(selector, start, end) {
      console.log('render!', selector, start, end);
      start = start || 0;
      var $works = $(selector),
          $container = $works.eq(0).parent();
      WORKS.forEach(function(work, i) {
        console.log(work.title);
        var $work = $works.filter('[title="' + work.title + '"]');
        if (i >= start && (!end || i <= end)) {
          $container.append($work);
        } else {
          $work.remove();
        }
      });
    }

    //console.log(WORKS)
    WORKS.sort(function(a, b) {
      return (a.date > b.date) ? 1 : -1;
    }).reverse()

    renderWorks('.works-maj', 2);
    renderWorks('.new-work', 0, 2);
    renderWorks('#works-list > div')


    //console.log(WORKS)
    // WORKS.forEach(function(work) {
    //   console.log(work.title);
    //   $container.prepend($works.filter('[title="' + work.title + '"]'));
    //   //console.log(work, $works.filter('[title="' + work.title + '"]'))
    // });
});
