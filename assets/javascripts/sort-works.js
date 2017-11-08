$(document).ready(function() {
    if (!window.WORKS) {
      return;
    }


    // var $works = $('.works-maj, #works-list > div'),
    //     $container = $works.eq(0).parent();

    function renderWorks(selector, start, end) {
      start = start || 0;
      var $works = $(selector),
          $container = $works.eq(0).parent();
      WORKS.forEach(function(work, i) {
        var $work = $works.filter('[title="' + work.title + '"]');
        if (i >= start && (!end || i <= end)) {
          $container.append($work);
        } else {
          $work.remove();
        }
      });
    }

    WORKS.sort(function(a, b) {
      return (a.date > b.date) ? 1 : -1;
    }).reverse()

    renderWorks('.works-maj', 2);
    renderWorks('.new-work', 0, 2);
    renderWorks('#works-list > div')
});
