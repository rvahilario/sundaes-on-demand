import Head from 'next/head';
// import styles from '@/styles/';

import { ExampleComponent } from '@/components/ExampleComponent';

export default function Home() {
	return (
		<>
			<Head>
				<title>'TypeScript starter for Next.js'</title>
			</Head>

			<h1>~ Hello World ~</h1>

			<ExampleComponent title="Example button" />
		</>
	);
}
