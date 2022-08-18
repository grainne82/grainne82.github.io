---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Homepage
layout: default

---
This is my homepage.

I like flowers.

![flowers](/flower.jpeg)

This is an example of my [work](pages/brochure-web.pdf).


Both these links work
[About](pages/about.markdown)
[About](pages/about)
[About](pages/about/)
[Overview](pages/overview/)


##{{ site.data.navigation.docs_list_title }}
<ul>
   {% for item in site.data.navigation.docs %}
      <li><a href="{{ item.url }}">{{ item.title }}</a></li>
   {% endfor %}
</ul>
