---
main_img: "fields.jpg"
title: "Works"
---

## Works

<div id="works-list">
{% for work in site.works %}
<div class="row" title="{{work.title}}">
  <div class="col-sm-12">
    <h3>
      <a href="{{work.url}}">{{work.title}}</a>
    </h3>
    <span>{{work.year}}</span>
  </div>
</div>
{% endfor %}
</div>

<script type="text/javascript" src="/assets/javascripts/filter.js"></script>
<script type="text/javascript">
  (function() {

    const revCronWorks = [...OZET.WORKS].sort(function(a, b) {
      return (a.date > b.date) ? 1 : -1;
    }).reverse()

    OZET.filter(revCronWorks.slice(1), '#works-list', (item, el) => {
      return $(el).attr('title') === item.title
    })

  })()
</script>
