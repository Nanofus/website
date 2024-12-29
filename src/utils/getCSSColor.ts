export let getCSSColor = (colorName: string) => {
	return window
		.getComputedStyle(document.documentElement)
		.getPropertyValue(colorName);
};
