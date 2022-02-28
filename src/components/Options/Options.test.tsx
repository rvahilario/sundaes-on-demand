import { render, screen } from '@testing-library/react';
import Theme from '../../styles/theme';
import { Options } from './Options';
import { OptionsProps } from '@/components/Options/types';

const renderOptions = ({ optionType }: OptionsProps) => {
	render(
		<Theme>
			<Options optionType={optionType} />
		</Theme>,
	);
};

describe('<Options optionType="scoops" />', () => {
	it('displays image for each scoop option from server', async () => {
		renderOptions({ optionType: 'scoops' });

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

describe('<Options optionType="toppings" />', () => {
	it('displays image for each topping option from server', async () => {
		renderOptions({ optionType: 'toppings' });

		const toppingsImage = await screen.findAllByRole('img', {
			name: /topping$/i,
		});
		expect(toppingsImage).toHaveLength(3);

		const altText = toppingsImage.map((element) => {
			const imageElement = element as HTMLImageElement;
			return imageElement.alt;
		});
		expect(altText).toEqual([
			'Cherries topping',
			'M&Ms topping',
			'Hot fudge topping',
		]);
	});
});
