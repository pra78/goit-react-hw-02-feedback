import { Container } from './Section.styled';

export const Section = ({ title, children }) => {
    return <Container>{ title }{children}</Container>;
};