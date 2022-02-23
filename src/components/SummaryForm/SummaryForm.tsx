import { useState } from 'react';
import { Container } from './styles';
import { SummaryFormProps } from './types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const SummaryForm = ({}: SummaryFormProps) => {
	const [tcChecked, setTcChecked] = useState(false);

	const checkboxLabel = (
		<span>
			I agree to <span>Terms and Conditions</span>
		</span>
	);

	return (
		<Container>
			<Form>
				<Form.Group controlId="terms-an-conditions">
					<Form.Check
						type="checkbox"
						checked={tcChecked}
						onChange={(e) => setTcChecked(e.target.checked)}
						label={checkboxLabel}
					/>
				</Form.Group>

				<Button variant="primary" type="submit" disabled={!tcChecked}>
					Confirm order
				</Button>
			</Form>
		</Container>
	);
};
