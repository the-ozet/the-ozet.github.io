---
main_img: "Smuggler_still.jpg"
category: Works
title: Various Work
date: 2008-08-02
year: 2008-2013
---
## Various Work

### Locations

Ontological-Hysteric Theater, Listen/Space, Cousin Dave's House, Incubator Arts Project, Fresh Ground Pepper, The Silent Barn

### Summary

A collection of performances over the years.

OZETset (2013); [The] servant (cleaning up in the next room) cannot make music. (2013); OZET Katorga Workshop #2: Retraction Holiday (2012); OZET Drinking Ritual (2012); OZET Katorga Workshop #1 (2012); OZET Band: Premier (2011); The Smuggler • OZET Generation: 19 (2011); LULLABY (2009)

{% include materials.md %}

{% include videos.html %}

{% capture additional_js %}
  const FEATURED = [
    "100-Year-Old Man ChimeBox Movie + [The] servant (cleaning up in the next room) cannot make music.",
    "Drinking Ritual",
    "The Smuggler (OZET Generation: 19)",
    "Generation 6 Infinity Song no.2714"
  ]
  filter(FEATURED, '#works-videos', (item, el) => {
    return $(el).attr('title') == item
  })
{% endcapture %}
{% include categories.html videos="true" additional_js=additional_js %}

