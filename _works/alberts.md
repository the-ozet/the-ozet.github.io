---
main_img: "Alberts-s6.JPG"
category: Works
title: Alberts I-V
date: 2010-08-05
year: 2010
---
## Alberts I-V

### Dates

August 5-8, 2010
7pm

### Location

HERE
<br>New York, NY

### Summary

Ten years before the historic launch of the Collective Sphere OZET, five men endure eight grueling months of astronautical training in a secret facility three miles west of Zhytomyr. Two pioneers make the cut. A new chapter in the evolving OZET saga, featuring live acoustic and electronic music, dialogue, film, scientific exposition, boxing, duct tape, pickles and vodka.

{% include materials.md %}

{% include videos.html %}

{% capture additional_js %}
  const FEATURED = [
    "Excerpts from Alberts I-V",
    "OZET Archival Footage #20332-A",
    "Birds in Boxes"
  ]
  filter(FEATURED, '#works-videos', (item, el) => {
    return $(el).attr('title') == item
  })
{% endcapture %}
{% include categories.html videos="true" additional_js=additional_js %}


### Performers

Scott Blumenthal: acting, guitar<br>
Aaron Meicht: acting, trumpet<br>
Paula Matthusen and Wil Smith: pre-show assistants

### Designers / Crew

Paula Matthusen: live electronics<br>
Broken Chord: sound<br>
Jayce Bartok and Andres Karu: opening film<br>
Thomas Dunn: lights<br>
Anya Klepikov: set design consultant
