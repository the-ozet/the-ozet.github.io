---
main_img: "OoRT_3.jpg"
category: Works
title: "A Scale Unfamiliar: OZET Songs"
date: 2020-01-01
order_date: 2020-04-01
year: 2020
---

## A Scale Unfamiliar: OZET Songs

April 1-5, 2020<br/>
8pm

### Location

(https://www.bricktheater.co/")[The Brick]</br>
Brooklyn, New York

### Summary

"We are now part of the scattered disk."

<i>OoRT</i>, currently in development, is a theatrical-music work for five actors and five musicians.

<i>OoRT</i> will portray a morning, late in the 22nd Generation. OZET has grown cold, the Council that once governed OZET from a central city, has dissolved, and most of the once-thriving villages have failed and been abandoned. Those that remain are tied to each other by a fragile gift economy. Three members of Village 4 are completing a ritual, overnight vigil. At dawn, they prepare themselves to perform a series of songs that will welcome visitors from Village 20. The visitors who arrive, however, are not the visitors they expect, and the news they bring will challenge everyone's attitude toward the bleak, inevitable end ahead.

The five sections of <i>OoRT</i> alternate between music and theatrical performance: sections one and five are music only, two and four play out as somewhat conventional scenes, and section three combines both. Musicians and actors share the stage throughout the piece, but exist in different -- if slightly porous -- realities.

In January of 2017 we produced <a href="/works/seed/">OoRT Prologue: Seed Silent in the Field</a>, as a part of The Exponential Festival at Vital Joint.

{% include videos.html %}

{% capture additional_js %}
const FEATURED = [
"OoRT or Why Pigs?: Section 3",
"OoRT Cake Recipe Film"
]
filter(FEATURED, '#works-videos', (item, el) => {
return \$(el).attr('title') == item
})
{% endcapture %}
{% include categories.html videos="true" additional_js=additional_js %}
