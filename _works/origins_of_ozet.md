---
main_img: "Bernal_scn8d.jpg"
category: Works
title: Origins of OZET
date: 2007-08-08
year: 2007-2008
---
## {{ page.title }}

2007-2008

### Locations

Rattlestick Theater, Ontological-Hysteric Theater

### Summary

The origins of OZET: early explorations of the melodic structure. The "Bernal Project" pieces integrated ideas and text by Carl Sagan, Karl Kraus, Mark Kurlansky, Barbara Rosenwein, and Peter Singer.  The final origin piece, "There's a distance…", included the first original text by Scott Blumenthal.

Formula (2007); Scene 2 (2007); Scene 8 (2008); Scene 5-7 (2008); There's a distance at which control returns to us (2008)

{% include materials.md %}

{% include videos.html %}

{% capture additional_js %}
  const FEATURED = [
    "Bernal Project: from scene 2 (pt.1)",
    "Bernal Project: from scene 6",
    "Bernal Project: from scene 8 (pt.1)"
  ]
  filter(FEATURED, '#works-videos', (item, el) => {
    return $(el).attr('title') == item
  })
{% endcapture %}
{% include categories.html videos="true" additional_js=additional_js %}


### Performers

Alex Barreto (actor), Scott Blumenthal (actor), Eric km Clark (violin), Kara Feely (actor), Travis Just (alto saxophone/clarinet), Aaron Meicht (trumpet), Seth Meicht (tenor saxophone/clarinet), James Moore (electric guitar/acoustic guitar), Quentin Tolimieri (keyboards/chimes), Harris Wulfson (violin/acoustic guitar)
