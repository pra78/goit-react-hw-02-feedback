import styled from '@emotion/styled';

export const FeedBackOptionsStyles = styled.button`
    padding: 10px;
    text-transform: capitalize;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: blue;
        color: white;
    }
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

export const FeedbackOptionsContainer = styled.div`
    margin: 10px;
    text-align: center;
`;