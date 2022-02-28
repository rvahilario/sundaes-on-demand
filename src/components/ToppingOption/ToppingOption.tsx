/* eslint-disable @next/next/no-img-element */
import { Container } from './styles';
import { ToppingOptionProps } from './types';

export const ToppingOption = ({ name, imagePath }: ToppingOptionProps) => {
	return (
		<Container>
			<h1>{name}</h1>
			<img src={imagePath} alt={`${name} topping`} />
		</Container>
	);
};
