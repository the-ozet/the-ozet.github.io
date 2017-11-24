### Videos

{% for video in site.videos %}
{% if video.work == page.title %}
<figure class="row video" title="{{video.title}}">
  <iframe class="col-sm-6 col-xs-12" src="https://www.youtube.com/embed/{{ video.videoid }}" frameborder="0" allowfullscreen></iframe>
  <figcaption class="col-sm-6">
    <h4><a href="https://youtu.be/{{video.videoid}}">{{ video.title }}</a></h4>
    <div class="caption">
      {{ video.content }}
    </div>
    </figcaption>
</figure>
{% endif %}
{% endfor %}
