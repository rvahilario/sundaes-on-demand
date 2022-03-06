import { render, screen } from '@/test-utils/testing-library-utils';
import { ScoopOption } from './ScoopOption';

describe('<ScoopOption />', () => {
	it('should render ScoopOption', () => {
		render(
			<ScoopOption
				name="Testing"
				imagePath="testing.png"
				updateItemCount={() => true}
			/>,
		);

		const scoopOptionName = screen.getAllByText('Testing');
		const scoopOptionImage = screen.getByAltText('Testing scoop');
		expect(scoopOptionName).toHaveLength(2);
		expect(scoopOptionImage).toBeInTheDocument();
	});
});
