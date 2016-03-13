---
category: OZET
---

**OZET** is an ongoing artistic collaboration that encompasses a variety of live performances, films, studio-produced song recordings, and a band. Each piece of the project draws on and expands the fictional history of the Collective Sphere OZET.  And makes my site rebuild.

<div class="works-container">
{% for work in site.works %}
<div class="row works-maj" title="{{work.title}}">
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
<script type="text/javascript" src="/assets/javascripts/sort-works.js" data-wft="build"></script>
