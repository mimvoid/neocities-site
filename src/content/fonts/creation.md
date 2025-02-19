---
title: Font Tools
linkTitle: Tools
description: A list of tools and resources in regards to fonts and typography
date: 2025-01-19T21:25:19-05:00
---

Under Construction...
{.secondary}

## Webfonts

### google-webfonts-helper

[Homepage](https://gwfh.mranftl.com/fonts)

[Source code](https://github.com/majodev/google-webfonts-helper)

Google Fonts is a great collection of free-to-use and high quality fonts, but Google
the company doesn't have quite as good of a reputation.

If you'd like to self-host your fonts, google-webfonts-helper is a great choice!
You can download the fonts in multiple formats, subsetted so they only need to
support the characters you require.

It was a huge aid for me to download Google Fonts in
[WOFF2 format]({{% relref "formats/fonts#woff2" %}}),
which I used to showcase many fonts in
[my font collections]({{% relref "fonts/collections" %}}).

### FontSquirrel's Webfont Generator

[Homepage](https://www.fontsquirrel.com/tools/webfont-generator)

Many fonts aren't available in WOFF2 format, but rather TTF or OTF format.
They're great for general use on the computer, but a little big for use on the web.

I found FontSquirrel's Webfont Generator the easily accessible choice, functional and
usable in the browser. In addition to converting to multiple font file formats,
it can subset fonts, adjust metrics and rendering, flatten Opentype features, and more.

### Webfont Kit Generator

[Homepage](https://apps.gnome.org/WebfontKitGenerator)

[Source code](https://github.com/rafaelmardojai/webfont-kit-generator)

Like FontSquirrel's generator, Webfont Kit Generator converts fonts to WOFF or
WOFF2 format.

It's not as feature rich, but it's an offline tool and so far has felt much more
reliable. It should be fine for most use cases.

## Font Creation

### FontForge

[Homepage](https://fontforge.org)

[Source code](https://github.com/fontforge/fontforge)

Online book: [Design with FontForge](http://designwithfontforge.com)

FontForge is what I use to create custom fonts. It's free and open source, with many handy
features to avoid some of the more tedious aspects of font design:

- Auto-kerning (just good for starting out)
- Diacritic and composite glyph building
- Autowidth and glyph centering
- Adding actual anchor points, simplifying paths, etc.
- Generating font family members (italic, bold, outline, etc.)

It has a pretty big learning curve, especially without much vector graphics experience.
However, I was able to pick up on it decently by reading through documentation.
