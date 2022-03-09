import { OrderEntry } from '@/components/OrderEntry';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>'TypeScript starter for Next.js'</title>
			</Head>
			<OrderEntry />
		</>
	);
}
