import { AppProps } from 'next/app';
import Theme from '@/styles/theme';
import { OrderDetailsProvider } from '@/contexts/OrderDetails';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<OrderDetailsProvider>
				<Component {...pageProps} />
			</OrderDetailsProvider>
		</Theme>
	);
}
