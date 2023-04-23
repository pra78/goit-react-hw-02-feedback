import PropTypes from 'prop-types';
import { FeedBackOptionsStyles, FeedbackOptionsContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <FeedbackOptionsContainer>
        {options.map((option, idx) => (
            <FeedBackOptionsStyles key={idx} type="button" onClick={() => onLeaveFeedback(option)}>{option}</FeedBackOptionsStyles>
        ))}
    </FeedbackOptionsContainer>
)

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}