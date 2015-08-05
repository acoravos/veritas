var QuestionList = React.createClass({

  propTypes:{
    questions: React.PropTypes.array.isRequired,
    onSelect:  React.PropTypes.func.isRequired,
  },

  render: function() {
    var onSelect = this.props.onSelect
    var questions = this.props.questions.map(function (question) {
      var selectQuestion = onSelect.bind(null, question)
      return <div key={question.id}><ul><ActionLink onClick={selectQuestion}>{question.truth}</ActionLink></ul></div>

    });

    return <div class="QuestionList"><ul> {questions} </ul></div>;
  },
});