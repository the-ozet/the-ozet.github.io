---
title: Music
category: Music
---

## Music
<div id="music-list">
  {% for music in site.music %}
  <div class="row" title="{{music.title}}">
    <div class="col-sm-12">
      <h3>
        <a href="{{music.url}}">{{music.title}}</a>
      </h3>
      <span>{{music.year}}</span>
      {% if music.playlistid %}
      <div class="playlist-embed">
        <iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/{{ music.playlistid}}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false"></iframe>
      </div>
      {% endif %}
      {% if music.bandcampid %}
      <div class="playlist-embed">
        <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album={{music.bandcampid}}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>
      </div>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<script type="text/javascript" src="/assets/javascripts/filter.js"></script>
<script type="text/javascript">
  (function() {

    let OZET = window.OZET || {};

    OZET.MUSIC = [{% for music in site.music %}{
      title: "{{music.title}}",
      date: '{{music.date}}'
    },{% endfor %}]

    const revCron = [...OZET.MUSIC].sort(function(a, b) {
      return (a.date > b.date) ? 1 : -1;
    }).reverse()

    OZET.filter(revCron, '#music-list', (item, el) => {
      return $(el).attr('title') === item.title
    })

  })()
</script>
