---
title: Texts
category: texts
---

## Texts

<div id="texts">
{% for text in site.texts %}
<div class="row" title="{{work.text}}">
  <div class="col-sm-10 col-xs-12">
    <h3>{{text.title}}</h3>
    {{ text.content }}
  </div>
</div>
{% endfor %}
</div>

