export function handleClickOutside(event: MouseEvent, className: string, open: boolean) {
	const target = event.target as HTMLElement;
	if (!target.closest(className)) {
		open = false;
	}
}
