import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 280px;
	margin: 1rem 0rem;
	padding: 0.8rem;
	align-items: center;
	border: 3px solid ${(props) => props.theme.colors.primary._100};
	border-radius: 18px;

	img {
		margin-top: 0.5rem;
		width: 10rem;
	}

	.row {
		flex-direction: column;
		padding: 0.5rem 0.5rem;
		text-align: center;

		.form-control {
			background-color: ${(props) => props.theme.colors.text._300};
			text-align: center;
			width: 4rem;
			padding: 0.3rem 0.5rem;
			font-weight: bold;
			font-size: 1rem;
		}
	}
`;
