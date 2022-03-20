import { render, screen, waitFor } from '@/test-utils/testing-library-utils';
import { OrderEntry } from './OrderEntry';
import { rest } from 'msw';
import { server } from '@/mocks/server';
import userEvent from '@testing-library/user-event';

const renderOrderEntry = () => render(<OrderEntry />);

describe('<OrderEntry />', () => {
	test('Handles error for scoops and toppings routes', async () => {
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

describe('Grand total', () => {
	test('If scoops is added first, grand total updates properly', async () => {
		renderOrderEntry();

		const chocolateInput = await screen.findByRole('spinbutton', {
			name: /chocolate/i,
		});
		const cherriesCheck = await screen.findByRole('checkbox', {
			name: /cherries/i,
		});
		const grandTotal = screen.getByText('Grand total: $', { exact: false });

		// check if grand total starts out $0.00
		expect(grandTotal).toHaveTextContent('$0.00');

		userEvent.clear(chocolateInput);
		userEvent.type(chocolateInput, '1');
		expect(grandTotal).toHaveTextContent('$2.00');

		userEvent.click(cherriesCheck);
		expect(grandTotal).toHaveTextContent('$3.50');

		userEvent.clear(chocolateInput);
		userEvent.type(chocolateInput, '0');
		expect(grandTotal).toHaveTextContent('$1.50');

		userEvent.click(cherriesCheck);
		expect(grandTotal).toHaveTextContent('$0.00');
	});

	test('If topping is added first, grand total updates properly', async () => {
		renderOrderEntry();

		const cherriesCheck = await screen.findByRole('checkbox', {
			name: /cherries/i,
		});
		const chocolateInput = await screen.findByRole('spinbutton', {
			name: /chocolate/i,
		});
		const grandTotal = screen.getByText('Grand total: $', { exact: false });

		userEvent.click(cherriesCheck);
		expect(grandTotal).toHaveTextContent('$1.50');

		userEvent.clear(chocolateInput);
		userEvent.type(chocolateInput, '2');
		expect(grandTotal).toHaveTextContent('$5.50');

		userEvent.click(cherriesCheck);
		expect(grandTotal).toHaveTextContent('$4.00');

		userEvent.clear(chocolateInput);
		userEvent.type(chocolateInput, '0');
		expect(grandTotal).toHaveTextContent('$0.00');
	});
});
