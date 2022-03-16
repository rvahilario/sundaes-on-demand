import { useState } from 'react';
import { useOrderDetails } from '@/contexts/OrderDetails';
import { Container } from './styles';
import { SummaryFormProps } from './types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export const SummaryForm = ({}: SummaryFormProps) => {
	const [orderDetails] = useOrderDetails();
	const [tcChecked, setTcChecked] = useState(false);

	const scoopsOrder: Array<[string, number]> = Array.from(
		orderDetails.scoops.entries(),
	);
	const listScoopsOrder = scoopsOrder.map(([key, value]: [string, number]) => (
		<li key={key}>
			{value} {key}
		</li>
	));

	const popover = (
		<Popover id="terms-popover">
			<Popover.Body>No ice cream will actually be delivered</Popover.Body>
		</Popover>
	);

	const checkboxLabel = (
		<span>
			I agree to
			<OverlayTrigger placement="right" overlay={popover}>
				<span> Terms and Conditions</span>
			</OverlayTrigger>
		</span>
	);

	return (
		<Container>
			<h1>Order Summary</h1>
			<br />
			<h2>Scoops: {orderDetails.totals.scoops}</h2>
			<ul>{listScoopsOrder}</ul>
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
