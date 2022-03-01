import axios from 'axios';
import { useEffect, useState } from 'react';

import { Container } from './styles';
import { OptionsProps } from './types';
import { ScoopOption, ScoopOptionProps } from '@/components/ScoopOption';
import { ToppingOption } from '@/components/ToppingOption';
import { AlertBanner } from '@/components/AlertBanner';

export const Options = ({ optionType }: OptionsProps) => {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(false);

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

	// TODO: replace null by topping option
	const ItemComponent = (
		optionType === 'scoops' ? ScoopOption : ToppingOption
	) as React.ElementType;

	const optionItems = items.map((item: ScoopOptionProps) => (
		<ItemComponent
			key={item.name}
			name={item.name}
			imagePath={item.imagePath}
		/>
	));

	return <Container>{optionItems}</Container>;
};
