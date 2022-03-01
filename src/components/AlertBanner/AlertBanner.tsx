import { Container } from './styles';
import { AlertBannerProps } from './types';
import Alert from 'react-bootstrap/Alert';

export const AlertBanner = ({ message, variant }: AlertBannerProps) => {
	const alertMessage =
		message || 'An unexpected error ocurred. Please try again later.';
	const alertVariant = variant || 'danger';

	return (
		<Container>
			<Alert variant={alertVariant}>{alertMessage}</Alert>
		</Container>
	);
};
