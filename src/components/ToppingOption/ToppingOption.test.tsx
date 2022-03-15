import { render, screen } from '@/test-utils/testing-library-utils';
import { ToppingOption } from './ToppingOption';

describe('<ToppingOption />', () => {
	it('should render ToppingOption', () => {
		render(
			<ToppingOption
				name="Testing"
				imagePath="testing.png"
				updateItemCount={() => true}
			/>,
		);

		const toppingOption = screen.getByText('Testing');
		const toppingOptionImage = screen.getByAltText('Testing topping');

		expect(toppingOption).toBeInTheDocument();
		expect(toppingOptionImage).toBeInTheDocument();
	});
});
