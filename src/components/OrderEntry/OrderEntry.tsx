import { Container } from './styles';
import { OrderEntryProps } from './types';
import { Options } from '@/components/Options';

export const OrderEntry = ({}: OrderEntryProps) => {
	return (
		<Container>
			<Options optionType="scoops" />
			<Options optionType="toppings" />
		</Container>
	);
};
