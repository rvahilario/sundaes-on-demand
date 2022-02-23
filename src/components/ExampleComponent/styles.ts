import styled from 'styled-components';

export const Container = styled.button`
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.text};
`;
