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

{% capture additional_js %}
  filter(reverseCron(TEXTS), '#texts-list', (item, el) => {
    return $(el).attr('title') === item.title
  })
{% endcapture %}
{% include categories.html texts="true" additional_js=additional_js %}
