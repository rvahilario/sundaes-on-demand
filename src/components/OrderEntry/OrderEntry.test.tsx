import { render, screen } from '@testing-library/react';
import Theme from '../../styles/theme';
import { OrderEntry } from './OrderEntry';

const renderOrderEntry = () => {
	render(
		<Theme>
			<OrderEntry />
		</Theme>,
	);
};

describe('<OrderEntry />', () => {
	it('Handles error for scoops and toppings routes', async () => {
		renderOrderEntry();

		const alerts = await screen.findAllByRole('alert', {
			name: 'An expected error ocurred. Please try again later.',
		});

		expect(alerts).toHaveLength(2);
	});
});
