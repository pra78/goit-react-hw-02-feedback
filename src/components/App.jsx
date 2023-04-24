import { Component, Fragment } from "react"
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleFeedback = (choice) => (
    this.setState(prevState => ({
      [choice]: prevState[choice] + 1,
    }))
  )

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((mark, acc) => acc += mark, 0);
  }
  
  countPositiveFeedbackPercentage() {
    return (this.countTotalFeedback() ? Math.round(this.state.good / this.countTotalFeedback() * 100) : 0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Fragment>
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedback}></FeedbackOptions>
        {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics> : <Notification message="There is no feedback"></Notification>}
      </Fragment>
    );
  }
};
