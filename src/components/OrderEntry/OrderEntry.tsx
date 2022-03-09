import { Container } from './styles';
import { OrderEntryProps } from './types';
import { Options } from '@/components/Options';
import { useOrderDetails } from '@/contexts/OrderDetails';

export const OrderEntry = ({}: OrderEntryProps) => {
	const [orderDetails] = useOrderDetails();

	return (
		<Container>
			<Options optionType="scoops" />
			<Options optionType="toppings" />
			<h2>Grand total: {orderDetails.totals.grandTotal}</h2>
		</Container>
	);
};
