import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@/test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import userEvents from '@testing-library/user-event';
import { SummaryForm } from './SummaryForm';

const renderSummaryForm = () => {
	render(<SummaryForm />);
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

	it('popover responds to hover', async () => {
		renderSummaryForm();

		const popoverText = /no ice cream will actually be delivered/i;

		const nullPopover = screen.queryByText(popoverText);
		expect(nullPopover).toBeNull;

		const termsAndConditions = screen.getByText(/terms and conditions/i);
		userEvent.hover(termsAndConditions);
		const popover = screen.getByText(popoverText);
		expect(popover).toBeInTheDocument();

		userEvent.unhover(termsAndConditions);
		await waitForElementToBeRemoved(() => screen.queryByText(popoverText));
	});
});
