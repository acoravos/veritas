var QuestionList = React.createClass({

  propTypes:{
    questions: React.PropTypes.array.isRequired,
    onSelect:  React.PropTypes.func.isRequired,
  },

  render: function() {
    var onSelect = this.props.onSelect
    var questions = this.props.questions.map(function (question) {
      var selectQuestion = onSelect.bind(null, question)
      return <ul><ActionLink onClick={selectQuestion}>{question.truth}</ActionLink></ul>

    });

    return <div class="QuestionList"> {questions} </div>;
  },
});