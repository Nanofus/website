// Set up our MediaQueryList
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let prefersDarkMode: any;
if (browser) {
  prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
}

export const darkMode = writable(!!prefersDarkMode?.matches);

prefersDarkMode?.addListener((e: any) => darkMode.set(!!e.matches));
