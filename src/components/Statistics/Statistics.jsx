import PropTypes from 'prop-types';
import { StatisticsHeader, StatisticsStyles } from './Statistics.styled';
import { Fragment } from 'react';


export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <Fragment>
            <StatisticsHeader>Statistics</StatisticsHeader>
            <StatisticsStyles>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
            </StatisticsStyles>
        </Fragment>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}