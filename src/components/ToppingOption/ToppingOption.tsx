/* eslint-disable @next/next/no-img-element */
import { Container } from './styles';
import { ToppingOptionProps } from './types';

import Form from 'react-bootstrap/Form';

export const ToppingOption = ({
	name,
	imagePath,
	updateItemCount,
}: ToppingOptionProps) => {
	return (
		<Container>
			<img src={`http://localhost:3030${imagePath}`} alt={`${name} topping`} />
			<Form.Group controlId={`${name}-topping-checkbox`}>
				<Form.Check
					type="checkbox"
					label={<h5>{name}</h5>}
					onChange={(e) => {
						updateItemCount(name, e.target.checked ? 1 : 0);
					}}
				/>
			</Form.Group>
		</Container>
	);
};
