import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 280px;
	margin: 1rem 0.8rem;
	padding: 0.8rem;
	align-items: center;
	border: 3px solid ${(props) => props.theme.colors.primary._100};
	border-radius: 18px;

	img {
		margin-top: 0.5rem;
		width: 10rem;
	}

	.form-check {
		width: 100%;
		display: flex;
		margin: 0.5rem 0.5rem;
		margin-left: 0;
		justify-content: space-between;
		text-align: center;

		input {
			margin-top: 4px;
		}
	}
`;
