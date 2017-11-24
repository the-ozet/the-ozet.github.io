---
title: Texts
category: texts
---

## Texts

<div id="texts-list">
  {% for text in site.texts %}
  <div class="row" title="{{text.title}}">
    <div class="col-sm-12">
      <h3>
      {% if text.redirect == null %}
        <a href="{{text.url}}">{{text.title}}</a>
      {% else %}
        <a href="{{text.redirect}}">{{text.title}}</a>
      {% endif %}
      </h3>
      {% if text.work %}
      <span>From <em>{{text.work}}</em></span>, 
      {% endif %}
      <span>{{text.year}}</span>
    </div>
  </div>
  {% endfor %}
</div>

<script type="text/javascript" src="/assets/javascripts/filter.js"></script>
<script type="text/javascript">
  (function() {

    const revCron = [...OZET.TEXTS].sort(function(a, b) {
      return (a.date > b.date) ? 1 : -1;
    }).reverse()

    OZET.filter(revCron, '#texts-list', (item, el) => {
      return $(el).attr('title') === item.title
    })

  })()
</script>
