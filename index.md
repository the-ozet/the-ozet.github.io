---
category: OZET
---

**OZET** is an ongoing artistic collaboration that encompasses a variety of live performances, films, studio-produced song recordings, and a band. Each piece of the project draws on and expands the fictional history of the Collective Sphere OZET.

<div class="works-container">
{% for work in site.works %}
<div class="row works-maj" title="{{work.title}}">
  <div class="col-sm-12">
    <h2>
      <a href="{{work.url}}">{{work.title}}</a>
      <span class="pull-right">{{work.year}}</span>
    </h2>
    <a href="{{work.url}}" className="main-image">
      <img src="/assets/images/{{work.main_img}}"/>
    </a>
  </div>
</div>
{% endfor %}
</div>

<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
    var works = [{% for work in site.works %}{{ work | jsonify }},{% endfor %}];
    $works = $('.works-maj'),
    $container = $works.eq(0).parent();

    works.sort(function(a, b) {
      return (Date.parse(new Date(a.date)) > Date.parse(new Date(b.date))) ? 1 : -1;
    }).
    forEach(function(work) {
      console.log(work.date, work.title);
      $container.prepend($works.filter('[title="' + work.title + '"]'));
    });
});
</script>