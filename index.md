---
category: OZET
---

<span class="ozet-style">OZET</span> is an ongoing artistic collaboration that encompasses a variety of live performances, films, studio-produced song recordings, and a band. Each piece of the project draws on and expands the fictional history of the Collective Sphere OZET.

<h2 class="hp-title">Latest</h2>
<div class="row" id="latest-work">
  <div class="new-work col-md-6 col-xs-12">
    <a href="/log/2017/12/20/the-transmissions-ep.html" class="main-image" style="background-image:url(/assets/images/transmissions.jpg)"></a>
    <h3><a href="/log/2017/12/20/the-transmissions-ep.html">The Transmissions EP</a></h3>
  </div>
  <div class="new-work col-md-6 col-xs-12">
    <a href="/works/oort" class="main-image" style="background-image:url(/assets/images/OoRT_3.jpg)"></a>
    <h3><a href="/works/oort">OoRT</a></h3>
  </div>
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
filter(reverseCron(WORKS).slice(2), '.works-container', (item, el) => {
return \$(el).attr('title') === item.title
})
{% endcapture %}
{% include categories.html works="true" additional_js=additional_js %}
