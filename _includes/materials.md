### Working Materials

{% for score in site.scores %}
{% if score.work == page.title %}
#### [{{score.title}} Score](/assets/scores/{{score.score}})
{% endif %}
{% endfor %}

{% for text in site.texts %}
{% if text.work == page.title %}
{% if text.redirect == null %}
#### [{{text.title}}]({{text.url}})
{% else %}
#### [{{text.title}}]({{text.redirect}})
{% endif %}
{% endif %}
{% endfor %}
