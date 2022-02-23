import { useState } from 'react';
import { Container } from './styles';
import { SummaryFormProps } from './types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export const SummaryForm = ({}: SummaryFormProps) => {
	const [tcChecked, setTcChecked] = useState(false);

	const popover = (
		<Popover id="terms-popover">
			<Popover.Body>No ice cream will actually be delivered</Popover.Body>
		</Popover>
	);

	const checkboxLabel = (
		<span>
			I agree to
			<OverlayTrigger placement="right" overlay={popover}>
				<span>Terms and Conditions</span>
			</OverlayTrigger>
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
