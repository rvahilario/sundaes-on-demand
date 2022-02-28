import { render, screen } from '@testing-library/react';
import Theme from '../../styles/theme';
import { Options } from './Options';

const renderOptions = (type: string) => {
	render(
		<Theme>
			<Options optionType={type} />
		</Theme>,
	);
};

describe('<Options optionType="scoops" />', () => {
	it('displays image for each scoop option from server', async () => {
		renderOptions('scoops');

		//find images
		const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
		expect(scoopImages).toHaveLength(2);

		// confirm alt text of images
		const altText = scoopImages.map((element) => {
			const imageElement = element as HTMLImageElement;
			return imageElement.alt;
		});
		expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
	});
});
