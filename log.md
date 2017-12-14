---
title: Log
category: log
---

## OZET Log

<div id="logs-list">
  {% for post in site.posts %}
  <div class="row" title="{{post.title}}">
    <div class="col-sm-12">
      <h3>
        <a href="{{post.url}}">{{post.title}}</a>
      </h3>
      <span>{{post.human_date}}</span>
    </div>
  </div>
  {% endfor %}
</div>
