import { render, screen } from '@testing-library/react';
import Theme from '../../styles/theme';
import { Options } from './Options';
import { OptionsProps } from '@/components/Options/types';
import userEvent from '@testing-library/user-event';

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

describe('Testing Subtotals', () => {
	test('Update scoops subtotal when scoops change', async () => {
		renderOptions({ optionType: 'scoops' });

		const scoopsSubtotal = screen.getByText('Scoops total: $', {
			exact: false,
		});
		// make sure total starts out $0.00
		expect(scoopsSubtotal).toHaveTextContent('$0.00');

		// update vanilla scoops to 1 and check subtotal
		const vanillaInput = await screen.findByRole('spinbutton', {
			name: /vanilla/i,
		});

		userEvent.clear(vanillaInput);
		userEvent.type(vanillaInput, '1');
		expect(scoopsSubtotal).toHaveTextContent('$2.00');

		// update chocalate scoops to 2 and check subtotal
		const chocolateInput = await screen.findByRole('spinbutton', {
			name: /chocolate/i,
		});

		userEvent.clear(chocolateInput);
		userEvent.type(chocolateInput, '2');
		expect(scoopsSubtotal).toHaveTextContent('$6.00');
	});
});
