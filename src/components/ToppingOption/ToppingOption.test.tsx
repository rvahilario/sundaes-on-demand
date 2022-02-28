import { render /*screen*/ } from '@testing-library/react';
import Theme from '../../styles/theme';
import { ToppingOption } from './ToppingOption';

describe('<ToppingOption />', () => {
	it('should render ToppingOption', () => {
		render(
			<Theme>
				<div />
			</Theme>,
		);

		// const toppingOption = screen.getByText('ToppingOption');

		// expect(toppingOption).toBeInTheDocument();
	});
});
