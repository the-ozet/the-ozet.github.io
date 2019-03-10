---
main_img: "OoRT_3.jpg"
category: Works
title: OoRT
date: 2016-03-01
year: 2017
---
## OoRT

TBA

### Location

TBD

### Summary

"We are now part of the scattered disk."

Currently in development is our newest piece: <i>OoRT</i>.  It is a theatrical-music work for five actors and five musicians.

<i>OoRT</i> will portray a morning, late in the 22nd Generation. OZET has grown cold, the Council that once governed OZET from a central city, has dissolved, and most of the once-thriving villages have failed and been abandoned.  Those that remain are tied to each other by a fragile gift economy. Three members of Village 4 are completing a ritual, overnight vigil.  At dawn, they prepare themselves to perform a series of songs that will welcome visitors from Village 20.  The visitors who arrive, however, are not the visitors they expect, and the news they bring will challenge everyone's attitude toward the bleak, inevitable end ahead.

The five sections of <i>OoRT</i> alternate between music and theatrical performance: sections one and five are music only, two and four play out as somewhat conventional scenes, and section three combines both.  Musicians and actors share the stage throughout the piece, but exist in different -- if slightly porous -- realities.

In January of 2017 we produced <em>OoRT Prologue: Seed Silent in the Field</em>, as a part of The Exponential Festival at Vital Joint.  The Prologue was a theatrical-musical ritual, portraying the role of the Cousins of Village 4 maintaining the fragile gift economy of OZET's 22nd Generation.  Onions, beets, plum brandy, sheep.

{% include materials.md %}

{% include videos.html %}

{% capture additional_js %}
  const FEATURED = [
    "OoRT Prologue: Seed Silent in the Field",
    "OoRT or Why Pigs?: Section 3",
    "OoRT Prologue Trailer",
    "OoRT Cake Recipe Film"
  ]
  filter(FEATURED, '#works-videos', (item, el) => {
    return $(el).attr('title') == item
  })
{% endcapture %}
{% include categories.html videos="true" additional_js=additional_js %}

