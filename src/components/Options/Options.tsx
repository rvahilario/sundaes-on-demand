import axios from 'axios';
import { useEffect, useState } from 'react';

import { Container } from './styles';
import { OptionsProps } from './types';
export const Options = ({ optionType }: OptionsProps) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((res) => setItems(res.data))
			.catch((error) => {
				throw new Error(error);
			});
	}, [optionType]);

	return <Container />;
};
