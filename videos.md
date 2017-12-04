---
title: Videos
category: Videos
---

## Videos
<div id="videos-list">
  {% for video in site.videos %}
  <figure class="row video" title="{{video.title}}">
    <iframe class="col-sm-6 col-xs-12" src="https://www.youtube.com/embed/{{ video.videoid }}" frameborder="0" allowfullscreen></iframe>
    <figcaption class="col-sm-6">
      <h4><a href="https://youtu.be/{{video.videoid}}">{{ video.title }}</a></h4>
      {% if video.work %}
      <span>From <em>{{video.work}}</em></span>
      {% endif %}
      <div class="caption">
      {{ video.content }}
      </div>
      </figcaption>
  </figure>
  {% endfor %}
</div>

{% capture additional_js %}
  filter(reverseCron(VIDEOS), '#videos-list', (item, el) => {
    return $(el).attr('title') === item.title
  })
{% endcapture %}
{% include categories.html videos="true" additional_js=additional_js %}
