---
title: Test post in markdown
date: '2023-04-25'
---

Hey all! This is a test post generated from markdown with mdsvex. In the future I might write some actual content here.

Here's some Svelte code that should be syntax highlighted:
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
