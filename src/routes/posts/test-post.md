---
title: Test post in markdown
date: '2023-04-25'
---

Hey all! This is a test post generated from markdown with mdsvex. In the future I might write some actual content here. Perhaps one day...[^1]

- List
- List
- List
- [ ] Checkbox
- ~~Strikethrough~~

Here's some Svelte code that should be syntax highlighted:[^2]
```js
import { preloadCode } from '$app/navigation';
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import '$lib/styles/style.scss';
import '$lib/styles/code.css';
import { fade, fly } from 'svelte/transition';
import { browser } from '$app/environment';

export let data;
$: if (browser) {
    preloadCode('/posts', '/posts/*');
}
```

## And here's a subheader!

See you later, maybe!

[^1]: Footnote here!
[^2]: Another one
