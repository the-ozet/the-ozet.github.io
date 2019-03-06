---
title: Videos
category: Videos
---

{% include videos.html %}

<div id="videos-list">
  {% for video in site.videos %}
  <figure class="row video" title="{{video.title}}">
    <div class="vid-thumb col-sm-6 col-xs-12" data-video="https://www.youtube.com/embed/{{ video.videoid }}">
      <div style="background-image: url(https://i.ytimg.com/vi/{{ video.videoid }}/hqdefault.jpg)"></div>
    </div>
    <figcaption class="col-sm-6 col-xs-12">
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

  var vidList = $('#videos-list'),
      FEATURED = [
        'Katorga: section 6',
        'OZET: Katorga [section 1]',
        '100-Year-Old Man ChimeBox Movie + [The] servant (cleaning up in the next room) cannot make music.',
        'An Ode to Our Travellers of the Constellations',
        'Katorga Retraction Holiday',
        'OZET Archival Footage #20332-A'
      ];

  for (var i = FEATURED.length - 1; i >= 0; i--) {
    var $found = $('.video').filter(function() {
      return $(this).attr('title') == FEATURED[i]
    });
    vidList.prepend($found);
  }
{% endcapture %}
{% include categories.html videos="true" additional_js=additional_js %}
