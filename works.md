---
main_img: "fields.jpg"
title: "Works"
---

<script type="text/javascript">
  var WORKS = [
{% for work in site.works %}
    {{ work | jsonify }},
{% endfor %}    
  ]
  console.log(WORKS);
</script>

{% for work in site.works %}
* [{{work.title}}]({{work.url}}) *{{work.date}}*
{% endfor %}