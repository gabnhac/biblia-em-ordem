import styled from "styled-components/native";

export const Wrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.FRENCH_GRAY};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.COLORS.PRUSSIAN_BLUE
    
}))``;