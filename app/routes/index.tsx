import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Sustainability Summit 2026' },
		{ name: 'description', content: 'Green Bridge Co' },
	];
}

export default function Home() {
	return <></>;
}
