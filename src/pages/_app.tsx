import { AppProps } from 'next/app';
import Theme from '@/styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<Component {...pageProps} />
		</Theme>
	);
}
