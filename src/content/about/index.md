---
title: About
description: About me
date: 2024-09-24T21:27:07-04:00
menus: tabs
weight: 10
params:
    customTitle: Hi! I'm mimvoid
---

{{% style %}}

<div class="fetcher">
  <p class="prompt tertiary">about-fetch</p>
  <div class="content">
    {{< fetcher.inline >}}
      <div class="art pop">
        {{ range $i, $class := slice "not-hover" "hover" }}
          {{- $img := $.Page.Resources.Get (printf "avatar-%d.webp" (add $i 1)) -}}
          <img
            class="{{ $class }}"
            src="{{ $img.RelPermalink }}"
            width="200"
            height="200"
            alt="A headshot of mimvoid's persona, with expressions drawn on a piece of paper covering their real face."
          />
        {{ end }}
      </div>
      <div class="text">
        <table class="info">
          <tr>
            <th>{{ partial "utils/svg" "pai-user" }} user</th>
            <td>mimvoid<span class="primary">@</span>neocities</td>
          </tr>
          <tr>
            <th>{{ partial "utils/svg" "pai-message-processing" }} pronouns</th>
            <td>she/they</td>
          </tr>
          <tr>
            <th>{{ partial "utils/svg" "pai-calendar-tomorrow" }} b-day</th>
            <td>29 March</td>
          </tr>
          <tr>
            <th>{{ partial "utils/svg" "pai-device-laptop" }} os</th>
            <td>Linux</td>
          </tr>
          <tr>
            <th>{{ partial "utils/svg" "pai-ac" }} distro</th>
            <td>NixOS :D</td>
          </tr>
        </table>
        <div class="palette">
          <span class="primary"></span>
          <span class="secondary"></span>
          <span class="tertiary"></span>
        </div>
      </div>
    {{< /fetcher.inline >}}
  </div>
</div>

> *An extra-dimensional being on a plane of unreality.*
> *Their lonesome thoughts spark new universes in wake and in sleep.*

I'm a busy college student with a knack for niche interests.
{{% kaomoji "(´=﹏=) ･ﾟ｡" %}}

I am a self-taught hobbyist artist, and I love my characters and worlds! I have a penchant for surrealism, character psychologies, and magic systems based on human perception.

I also love design and all kinds of neat free and open-source software. Before moving to Linux, I decorated my Windows desktop with [Rainmeter][1], and now I design some of my own widgets with [Astal][2]. Ricing is a rabbit hole that I am unfortunately *very* prone to falling in. But hey, that means I can use my computer in a way that I enjoy, find new tools while I'm at it, and talk about it with all of you!

And let's make this clear: I'm AuDHD and I have chronic joint pain and a dissociative disorder. It's difficult to walk the tightrope of being open and hiding from those who deride people like me. If you don't like these parts of me, then my personal space on the internet is not for you. Out, shoo, away with you!
{{% kaomoji "\\(>ᆺ<✿)" %}}

[1]: https://www.rainmeter.net
[2]: https://aylur.github.io/astal
