import styled from 'styled-components';

export const Container = styled.div`
	background: cadetblue;
	max-width: 1200px;
	margin: auto;
`;

export const Background = styled.div`
	background: ${(props) => props.theme.colors.primary._500};
	width: 100%;
	min-height: 100vh;
`;
