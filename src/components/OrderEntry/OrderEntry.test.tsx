import { render, screen, waitFor } from '@testing-library/react';
import Theme from '../../styles/theme';
import { OrderEntry } from './OrderEntry';
import { rest } from 'msw';
import { server } from '@/mocks/server';

const renderOrderEntry = () => {
	render(
		<Theme>
			<OrderEntry />
		</Theme>,
	);
};

describe('<OrderEntry />', () => {
	it('Handles error for scoops and toppings routes', async () => {
		server.resetHandlers(
			rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
				res(ctx.status(500)),
			),
			rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
				res(ctx.status(500)),
			),
		);

		renderOrderEntry();

		await waitFor(async () => {
			const alerts = await screen.findAllByRole('alert');

			expect(alerts).toHaveLength(2);
		});
	});
});
