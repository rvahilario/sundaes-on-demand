import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { OrderDetailsProvider } from '@/contexts/OrderDetails';
import Theme from '@/styles/theme';

const AllTheProviders: FC = ({ children }) => {
	return (
		<Theme>
			<OrderDetailsProvider>{children}</OrderDetailsProvider>
		</Theme>
	);
};

const renderCustom = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderCustom as render };
