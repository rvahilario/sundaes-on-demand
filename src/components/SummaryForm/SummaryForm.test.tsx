import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import { SummaryForm } from './SummaryForm';

const renderSummaryForm = () => {
	render(
		<ThemeProvider theme={theme}>
			<SummaryForm />
		</ThemeProvider>,
	);
};

describe('<SummaryForm />', () => {
	it('checkbox should starts unchecked by default and button disabled', () => {
		renderSummaryForm();

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
		renderSummaryForm();

		const checkbox = screen.getByRole('checkbox', {
			name: /i agree to terms and conditions/i,
		});
		const confirmButton = screen.getByRole('button', {
			name: /confirm order/i,
		});

		userEvents.click(checkbox);
		expect(checkbox).toBeChecked();
		expect(confirmButton).toBeEnabled();

		userEvents.click(checkbox);
		expect(checkbox).not.toBeChecked();
		expect(confirmButton).toBeDisabled();
	});
});
