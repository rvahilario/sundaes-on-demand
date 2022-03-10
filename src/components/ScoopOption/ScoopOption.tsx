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
			<img src={`http://localhost:3030${imagePath}`} alt={`${name} scoop`} />
			<Form.Group controlId={`${name}-count`} as={Row}>
				<Form.Label>
					<h2>{name}</h2>
				</Form.Label>
				<Form.Control type="number" defaultValue={0} onChange={handleChange} />
			</Form.Group>
		</Container>
	);
};
