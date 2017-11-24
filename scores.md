---
title: Scores
category: Scores
---

## Scores

<div id="scores-list">
  {% for score in site.scores %}
  <div class="row" title="{{score.title}}">
    <div class="col-sm-12">
      <h3>
        <a href="/assets/scores/{{score.score}}">{{score.title}}</a>
      </h3>
      {% if score.work %}
      <span>From <em>{{score.work}}</em></span>,
      {% endif %}
      <span>{{score.year}}</span>
    </div>
  </div>
  {% endfor %}
</div>

<script type="text/javascript" src="/assets/javascripts/filter.js"></script>
<script type="text/javascript">
  (function() {

    const revCron = [...OZET.SCORES].sort(function(a, b) {
      return (a.date > b.date) ? 1 : -1;
    }).reverse()

    OZET.filter(revCron, '#scores-list', (item, el) => {
      return $(el).attr('title') === item.title
    })


  })()
</script>
