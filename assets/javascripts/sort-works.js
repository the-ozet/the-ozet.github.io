$(document).ready(function() {
    if (!window.WORKS) {
      return;
    }
    // var works = [{% for work in site.works %}{{ work | jsonify }},{% endfor %}];
    $works = $('.works-maj, #works-list > div'),
    $container = $works.eq(0).parent();

    WORKS.sort(function(a, b) {
      return (Date.parse(new Date(a.date)) > Date.parse(new Date(b.date))) ? 1 : -1;
    }).
    forEach(function(work) {
      console.log(work.date, work.title);
      $container.prepend($works.filter('[title="' + work.title + '"]'));
    });
});