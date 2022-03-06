import { render, screen } from '@/test-utils/testing-library-utils';
import { AlertBanner } from './AlertBanner';

describe('<AlertBanner />', () => {
	it('should have correct alert message', () => {
		render(<AlertBanner />);

		const alertBanner = screen.getByRole('alert');
		expect(alertBanner).toHaveTextContent(
			'An unexpected error ocurred. Please try again later.',
		);
	});
});
