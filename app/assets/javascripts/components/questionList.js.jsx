var QuestionList = React.createClass({

  render: function() {
    var that = this;
    var listOfQuestions = this.props.questions.map(function(question, index){
      return <QuestionIndividual key={index} truth={question.truth} />
    })

    return (
      <div class="listofQuestions">
      {listOfQuestions}
      </div>
    );
  }
});