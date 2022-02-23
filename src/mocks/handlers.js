import { rest } from 'msw';

export const handlers = [
	// Handles a GET /user request
	rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
		return res(
			ctx.json([
				{ name: 'Chocalate', imagePath: '/image/chocalate.png' },
				{ name: 'Vanilla', imagePath: '/image/vanilla.png' },
			]),
		);
	}),
];
