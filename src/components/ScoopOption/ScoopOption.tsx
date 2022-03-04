/* eslint-disable @next/next/no-img-element */
import { Container } from './styles';
import { ScoopOptionProps } from './types';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const ScoopOption = ({
	name,
	imagePath,
	updateItemCount,
}: ScoopOptionProps) => {
	const handleChange = (event: any) => {
		updateItemCount(name, event.target.value);
	};

	return (
		<Container>
			<h1>{name}</h1>
			<img src={imagePath} alt={`${name} scoop`} />
			<Form.Group controlId={`${name}-count`} as={Row}>
				<Form.Label>{name}</Form.Label>
				<Form.Control type="number" defaultValue={0} onChange={handleChange} />
			</Form.Group>
		</Container>
	);
};
