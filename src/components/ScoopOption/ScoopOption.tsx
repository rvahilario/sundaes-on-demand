/* eslint-disable @next/next/no-img-element */
import { Container } from './styles';
import { ScoopOptionProps } from './types';

export const ScoopOption = ({ name, imagePath }: ScoopOptionProps) => {
	return (
		<Container>
			<h1>{name}</h1>
			<img src={imagePath} alt={`${name} scoop`} />
		</Container>
	);
};
