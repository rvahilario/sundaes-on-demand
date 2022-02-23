import { SummaryForm } from '@/components/SummaryForm';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from '@/styles/';

export default function Home() {
	return (
		<>
			<Head>
				<title>'TypeScript starter for Next.js'</title>
			</Head>
			<SummaryForm />
		</>
	);
}
