import { AppProps } from 'next/app';
import Theme from '@/styles/theme';
import { OrderDetailsProvider } from '@/contexts/OrderDetails';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<OrderDetailsProvider>
				<Head>
					<title>Sundae On Demand</title>
				</Head>
				<Component {...pageProps} />
			</OrderDetailsProvider>
		</Theme>
	);
}
