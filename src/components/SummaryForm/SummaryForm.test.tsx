import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import { SummaryForm } from './SummaryForm';

describe('<SummaryForm />', () => {
	it('checkbox should starts unchecked by default and button disabled', () => {
		render(
			<ThemeProvider theme={theme}>
				<SummaryForm />
			</ThemeProvider>,
		);

		const checkbox = screen.getByRole('checkbox', {
			name: /i agree to terms and conditions/i,
		});
		const confirmButton = screen.getByRole('button', {
			name: /confirm order/i,
		});

		expect(checkbox).not.toBeChecked();
		expect(confirmButton).toBeDisabled();
	});

	it('checking checkbox enables button and unchecking disables button', () => {
		render(
			<ThemeProvider theme={theme}>
				<SummaryForm />
			</ThemeProvider>,
		);

		const checkbox = screen.getByRole('checkbox', {
			name: /i agree to terms and conditions/i,
		});
		const confirmButton = screen.getByRole('button', {
			name: /confirm order/i,
		});

		fireEvent.click(checkbox);
		expect(checkbox).toBeChecked();
		expect(confirmButton).toBeEnabled();

		fireEvent.click(checkbox);
		expect(checkbox).not.toBeEnabled();
		expect(confirmButton).toBeDisabled();
	});
});
