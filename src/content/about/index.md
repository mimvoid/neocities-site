---
title: About
description: About me
date: 2024-09-24T21:27:07-04:00
layout: about
menus: tabs
weight: 10
---

{{% style %}}

# Hi! I'm mimvoid

<div class="fetcher">
    <p class="prompt tertiary">about-fetch</p>
    <div class="content">
        <div class="art pop">
            {{< avatar.inline >}}
                {{ $alt := "A headshot of mimvoid's persona, with expressions drawn on a piece of paper covering their real face." }}
                {{ with .Page.Resources.Get "avatar-1.webp" }}
                    <img
                        class="not-hover"
                        src="{{ .RelPermalink }}"
                        width="200px"
                        height="200px"
                        alt={{ $alt }}
                    />
                {{ end }}
                {{ with .Page.Resources.Get "avatar-2.webp" }}
                    <img
                        class="hover"
                        src="{{ .RelPermalink }}"
                        width="200px"
                        height="200px"
                        alt={{ $alt }}
                    />
                {{ end }}
            {{< /avatar.inline >}}
        </div>
        <div class="text">
            <div class="info">
                <strong class="groups">
                    <p>user</p>
                    <p>pronouns</p>
                    <p>b-day</p>
                    <p>os</p>
                    <p>distro</p>
                </strong>
                <div class="data">
                    <p>mimvoid<span class="primary">@</span>neocities</p>
                    <p>she/they</p>
                    <p>March 29</p>
                    <p>Linux</p>
                    <p>NixOS :D</p>
                </div>
            </div>
            <div class="palette">
                <span class="primary"></span>
                <span class="secondary"></span>
                <span class="tertiary"></span>
            </div>
        </div>
    </div>
</div>

> *An extra-dimensional being on a plane of unreality.*
> *Their lonesome thoughts spark new universes in wake and in sleep.*

I'm a busy college student with a knack for niche interests.

I am a self-taught hobbyist artist, and I love my characters and worlds! I have a penchant for surrealism, character psychologies, and magic systems based on human perception.

I also love design and all kinds of neat free and open-source software. Before moving to Linux, I decorated my Windows desktop with [Rainmeter][1], and now I design some of my own widgets with [Astal][2]. Ricing is a rabbit hole that I am unfortunately *very* prone to falling in. But hey, that means I can use my computer in a way that I enjoy, find new tools while I'm at it, and talk about it with all of you!

And let's make this clear: I'm AuDHD and I have chronic joint pain and a dissociative disorder. It's difficult to walk the tightrope of being open and hiding from those who deride people like me. If you don't like these parts of me, then my personal space on the internet is not for you. Out, shoo, away with you!
<span class="secondary">\\(>ᆺ<✿)</span>

[1]: https://www.rainmeter.net
[2]: https://aylur.github.io/astal
