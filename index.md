---
category: OZET
---

<span class="ozet-style">OZET</span> is an ongoing artistic collaboration that encompasses live performances, films, studio-produced song recordings, and a band. Each piece of the project draws on and expands <a href="/story/">the fictional history</a> of the Collective Sphere OZET.

<h2 class="hp-title">Upcoming</h2>
<div class="upcoming-works-container">
{% for work in site.works %}
<div class="row works-maj collection-item" title="{{work.title}}" data-collection="works">
  <div class="col-sm-12">
    <h2>
      <a href="{{work.url}}">{{work.title}}</a>
      <span class="pull-right">{{work.year}}</span>
    </h2>
    <a href="{{work.url}}" className="main-image">
      <img src="/assets/images/{{work.main_img}}"/>
    </a>
  </div>
</div>
{% endfor %}
</div>

<h2 class="hp-title">Previous</h2>
<div class="works-container">
{% for work in site.works %}
<div class="row works-maj collection-item" title="{{work.title}}" data-collection="works">
  <div class="col-sm-12">
    <h2>
      <a href="{{work.url}}">{{work.title}}</a>
      <span class="pull-right">{{work.year}}</span>
    </h2>
    <a href="{{work.url}}" className="main-image">
      <img src="/assets/images/{{work.main_img}}"/>
    </a>
  </div>
</div>
{% endfor %}
</div>

{% capture additional_js %}
filter(reverseCron(between(WORKS, null, '2020-01-31')), '.works-container', (item, el) => {
return $(el).attr('title') === item.title
})
filter(cron(between(WORKS, '2020-02-01')), '.upcoming-works-container', (item, el) => {
return $(el).attr('title') === item.title
})
{% endcapture %}
{% include categories.html works="true" additional_js=additional_js %}
