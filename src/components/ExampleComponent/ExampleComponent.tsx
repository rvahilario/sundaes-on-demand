import { Container } from './styles';
import { ExampleComponentProps } from './types';

export const ExampleComponent = ({ title }: ExampleComponentProps) => {
	return (
		<Container>
			<h1>{title}</h1>
		</Container>
	);
};
