---
main_img: "katorga-becky.jpg"
category: Works
title: Katorga
date: 2014-06-24
year: 2014
---

## Katorga

June, 2014

### Location

Incubator Arts Project

### Summary

KATORGA revolves around the experiences of a woman exiled to OZET’s prison colony for revolutionary activities in the turgid, early days of the Fifteenth Generation. Electronic and acoustic music, spoken and sung text, gestural choreography, and an immersive environment all combine to vivify a richly imagined world where prisoners labor in dimly lit mushroom fields as wardens struggle to communicate with the givers of the law, and somewhere on the outskirts a hundred-year-old hermit is setting out tea for his missing son.

{% include materials.md %}

{% include videos.html %}

{% capture additional_js %}
const FEATURED = [
"OZET: Katorga [section 1]",
"OZET: Katorga [section 4c]",
"OZET: Katorga [section 7 & 8]",
"Katorga: section 6",
"Katorga Retraction Holiday"
]
filter(FEATURED, '#works-videos', (item, el) => {
return \$(el).attr('title') == item
})
{% endcapture %}
{% include categories.html videos="true" additional_js=additional_js %}

### Performers

Becky Baumwoll: acting<br>
Daniel Baker: voice, chimes<br>
Scott Blumenthal: guitar<br>
Brendan Dougherty: drums, electronics<br>
Paula Matthusen: live vocal processing<br>
Aaron Meicht: trumpet, keyboards, electronics<br>
Matt Mitchell: piano, keyboards, electronics<br>

### Designers / Crew

Britt Plunkett: set<br>
Thomas Dunn: lights<br>
Kathleen Geldard: costumes<br>
Dan Scully: video<br>
Broken Chord: sound
Jesse Perez: performance consultant

### Press

"[Bidding Farewell to a Home of Visionary Art with Space Travel and a Vodka Shot](http://www.nytimes.com/2014/06/26/theater/incubator-arts-projects-katorga-an-ozet-performance.html?_r=0)", <em>The New York Times</em>, June 25, 2013

"[Katorga: An Ozet Performance](http://www.timeout.com/newyork/theater/katorga-an-ozet-performance)", Time Out New York, June 26, 2014
