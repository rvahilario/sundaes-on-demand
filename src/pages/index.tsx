/* eslint-disable @typescript-eslint/no-use-before-define */
import 'bootstrap/dist/css/bootstrap.min.css';
import { OrderEntry } from '@/components/Layouts/OrderEntry';
import { SummaryForm } from '@/components/Layouts/SummaryForm';
import styled from 'styled-components';

export default function Home() {
	return (
		<Container>
			<OrderEntry />
			<SummaryForm />
		</Container>
	);
}

const Container = styled.div`
	background: ${(props) => props.theme.colors.primary._500};
	width: 100%;
	min-height: 100vh;
`;
