---
title: Home
description: mimvoid's little corner, my space on the internet
date: 2024-07-22T21:27:02-04:00
params:
    customTitle: Welcome & Salutations!
---

{{% style %}}

<div style="margin-bottom: 1.5em">
    <span class="secondary">Artist</span>
    / <span class="secondary">Designer</span>
    / <span class="secondary">Programmer</span>
    / <span class="secondary">Webmaster</span>
</div>

Hi there, I'm **mimvoid**!
<span class="kaomoji">( ｡• ω •｡)ノ☆</span>

I made this website as my own little space on the internet.

<fieldset class="icons">
<legend>Goodies</legend>

<div class="icon-grid">
{{< icon-grid.inline >}}

{{-
    $icons := slice
    (dict "icon" "heart" "link" "worlds" "title" "Worlds & Characters")
    (dict "icon" "edit-box" "link" "fonts" "title" "Typography")
    (dict "icon" "file-alt" "link" "formats" "title" "File Formats (WIP)")
    (dict "icon" "debug" "link" "biology" "title" "Biology (WIP)")
    (dict "icon" "script-text" "link" "linguistics" "title" "Linguistics (WIP)")
-}}

{{- range $icons -}}
    <a
        {{ with $.Page.GetPage .link -}}
            href="{{ .RelPermalink }}"
        {{- end -}}
    >
        {{ partial "utils/svg" (print "pai-" .icon) }}
        <p class="small">{{ default (strings.Title .link) .title }}</p>
    </a>
{{- end -}}

{{< /icon-grid.inline >}}
</div>
</fieldset>

Linked in the footer are [my website's source code](https://github.com/mimvoid/neocities-site)
and [useful resources]({{% relref "/credits" %}}).
Feel free to take a look if anything piques your interest
and use them for your own website!

I believe in recording sources and dates. See anything without a citation?
Or even have an interesting source you'd like me to check out? Please let me know!

That's it for this introduction. Click on any links that interest you!

<span class="kaomoji">(ﾉ>ω<)ﾉ☆ﾟ.･｡ﾟ</span>
<span class="secondary">I hope you have fun~!</span>
