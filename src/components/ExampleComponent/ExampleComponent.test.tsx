import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import { ExampleComponent } from './ExampleComponent';

describe('<ExampleComponent />', () => {
	it('should render ExampleComponent', () => {
		render(
			<ThemeProvider theme={theme}>
				<ExampleComponent title="Example Component" />
			</ThemeProvider>,
		);

		const testButton = screen.getByRole('button', {
			name: /example component/i,
		});
		expect(testButton).toBeInTheDocument();
	});
});
