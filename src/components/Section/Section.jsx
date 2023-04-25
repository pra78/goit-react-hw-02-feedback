import PropTypes from 'prop-types';
import { Container } from './Section.styled';

export const Section = ({ title, children }) => {
    return <Container>{ title }{children}</Container>;
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}