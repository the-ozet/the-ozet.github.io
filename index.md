---
category: OZET
---

**OZET** is an ongoing artistic collaboration that encompasses a variety of live performances, films, studio-produced song recordings, and a band. Each piece of the project draws on and expands the fictional history of the Collective Sphere OZET.

<script type="text/javascript">
  var WORKS = [
{% for work in site.works %}
    {{ work | jsonify }},
{% endfor %}    
  ]
  console.log(WORKS);
</script>

{% for work in site.works %}
<div class="row works-maj">
  <div class="col-sm-12">
    <h2>
      <a href="">{{work.title}}</a>
      <span class="pull-right">{{work.date}}</span>
    </h2>
    <img src="/assets/images/{{work.main_img}}">
  </div>
</div>
{% endfor %}