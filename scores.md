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

{% capture additional_js %}
  filter(reverseCron(SCORES), '#scores-list', (item, el) => {
    return $(el).attr('title') === item.title
  })
{% endcapture %}
{% include categories.html scores="true" additional_js=additional_js %}
