---
category: OZET
---

**OZET** is an ongoing artistic collaboration that encompasses a variety of live performances, films, studio-produced song recordings, and a band. Each piece of the project draws on and expands the fictional history of the Collective Sphere OZET.

<h2 class="hp-title">Latest</h2>
<div class="row">
  <div id="latest-work" class="col-sm-12">
    {% for work in site.works %}
    <div class="new-work" title="{{work.title}}">
      <a href="{{work.url}}" className="main-image">
        <img src="/assets/images/{{work.main_img}}"/>
      </a>
      <h3><a href="{{work.url}}">{{work.title}}</a></h3>
    </div>
    {% endfor %}
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
<script type="text/javascript" src="/assets/javascripts/filter.js"></script>
<script type="text/javascript">
  (function() {

    const revCronWorks = [...OZET.WORKS].sort(function(a, b) {
      return (a.date > b.date) ? 1 : -1;
    }).reverse()

    OZET.filter(revCronWorks.slice(0,3), '#latest-work', (item, el) => {
      return $(el).attr('title') === item.title
    })

    OZET.filter(revCronWorks.slice(2), '.works-container', (item, el) => {
      return $(el).attr('title') === item.title
    })

  })()
</script>
