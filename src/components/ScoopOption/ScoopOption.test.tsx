import { render, screen } from '@testing-library/react';
import Theme from '../../styles/theme';
import { ScoopOption } from './ScoopOption';

describe('<ScoopOption />', () => {
	it('should render ScoopOption', () => {
		render(
			<Theme>
				<div />
			</Theme>,
		);

		// const scoopOption = screen.getByText('ScoopOption');

		// expect(scoopOption).toBeInTheDocument();
	});
});
