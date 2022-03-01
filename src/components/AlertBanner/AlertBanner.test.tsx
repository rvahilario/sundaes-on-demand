import { render, screen } from '@testing-library/react';
import Theme from '../../styles/theme';
import { AlertBanner } from './AlertBanner';

describe('<AlertBanner />', () => {
	it('should render AlertBanner', () => {
		render(
			<Theme>
				<AlertBanner />
			</Theme>,
		);

		// const alertBanner = screen.getByText('AlertBanner');

		// expect(alertBanner).toBeInTheDocument();
	});
});
