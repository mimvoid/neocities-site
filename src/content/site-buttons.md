---
title: Site Buttons
description: A page with site buttons for mimvoid's little corner
date: 2025-01-20T02:11:52-05:00
---

Here are the buttons for links to my website!

Please **download** the GIF or PNG files onto your site.
Hotlinking gets pretty tough on bandwidth...

I'd be really happy if you do. <span class="secondary">(´,,•ω•,,)♡</span>

```html
<a href="https://mimvoid.neocities.org" title="mimvoid's little corner">
    <img src="/path/to/file" />
</a>
```

## Animated

{{< site-buttons-animated.inline >}}

{{ with resources.Get "images/site-button/mimvoid_button1.gif" }}
<a href="{{ .RelPermalink }}"> 
    <img src="{{ .RelPermalink }}" alt="Dark site button for mimvoid's little corner" />
</a>
{{ end }}

{{ with resources.Get "images/site-button/mimvoid_button2.gif" }}
<a href="{{ .RelPermalink }}"> 
    <img src="{{ .RelPermalink }}" alt="Light site button for mimvoid's little corner" />
</a>
{{ end }}

{{< /site-buttons-animated.inline >}}

## Static

{{< site-buttons-static.inline >}}

{{ with resources.Get "images/site-button/mimvoid_button1.png" }}
<a href="{{ .RelPermalink }}"> 
    <img src="{{ .RelPermalink }}" alt="Dark site button for mimvoid's little corner" />
</a>
{{ end }}

{{ with resources.Get "images/site-button/mimvoid_button2.png" }}
<a href="{{ .RelPermalink }}"> 
    <img src="{{ .RelPermalink }}" alt="Light site button for mimvoid's little corner" />
</a>
{{ end }}

{{< /site-buttons-static.inline >}}

> *(Wait, I thought you loved WEBP?)*
>
> (Yes, it usually offers the best compression!
> However, the files are already very small and WEBP actually makes them larger in this case.)
