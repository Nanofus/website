import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const prefersDarkMode = browser ? window.matchMedia('(prefers-color-scheme: dark)') : null;
export const darkMode = writable(prefersDarkMode?.matches);

prefersDarkMode?.addEventListener('change', (e) => darkMode.set(e.matches));
