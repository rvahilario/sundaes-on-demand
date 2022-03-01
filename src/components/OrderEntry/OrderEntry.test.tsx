import { render, screen } from '@testing-library/react';
import Theme from '../../styles/theme';
import { OrderEntry } from './OrderEntry';

describe('<OrderEntry />', () => {
	it('should render OrderEntry', () => {
		render(
			<Theme>
				<OrderEntry />
			</Theme>,
		);

		const orderEntry = screen.getByText('OrderEntry');

		expect(orderEntry).toBeInTheDocument();
	});
});
