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

{% capture additional_js %}
  filter(reverseCron(WORKS).slice(1), '#works-list', (item, el) => {
    return $(el).attr('title') === item.title
  })
{% endcapture %}
{% include categories.html works="true" additional_js=additional_js %}
