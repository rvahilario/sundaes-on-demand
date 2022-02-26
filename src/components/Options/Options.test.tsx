import { render, screen } from '@testing-library/react';
import Theme from '../../styles/theme';
import { Options } from './Options';

const renderOptions = () => {
	render(
		<Theme>
			<Options optionType="scoops" />
		</Theme>,
	);
};

describe('<Options optionType="scoops" />', () => {
});
