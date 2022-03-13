import axios from 'axios';
import { useEffect, useState } from 'react';
import { useOrderDetails } from '@/contexts/OrderDetails';

import { Container } from './styles';
import { OptionsProps } from './types';
import { ScoopOption, ScoopOptionProps } from '@/components/ScoopOption';
import { ToppingOption } from '@/components/ToppingOption';
import { AlertBanner } from '@/components/AlertBanner';
import { Row } from 'react-bootstrap';
import { pricePerItem } from '@/constants';
import { formatCurrency } from '@/utils';

export const Options = ({ optionType }: OptionsProps) => {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(false);
	const [orderDetails, updateItemCount] = useOrderDetails();

	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((res) => setItems(res.data))
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			.catch((error) => {
				setError(true);
			});
	}, [optionType]);

	if (error) {
		return <AlertBanner />;
	}

	const ItemComponent = (
		optionType === 'scoops' ? ScoopOption : ToppingOption
	) as React.ElementType;
	const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

	const optionItems = items.map((item: ScoopOptionProps) => (
		<ItemComponent
			key={item.name}
			name={item.name}
			imagePath={item.imagePath}
			updateItemCount={(itemName: string, newItemCount: string) =>
				updateItemCount(itemName, newItemCount, optionType)
			}
		/>
	));

	return (
		<Container>
			<h2>{title}</h2>
			<p>{formatCurrency(pricePerItem[optionType])} each</p>
			<p>
				{title} total: {orderDetails.totals[optionType]}
			</p>
			<Row>{optionItems}</Row>
		</Container>
	);
};
