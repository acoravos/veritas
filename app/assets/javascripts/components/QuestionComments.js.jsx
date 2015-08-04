QuestionComments = React.createClass({

  propTypes:{
    questions: React.PropTypes.array.isRequired,
  },

  render: function(){
    return (
      <h1>insert comments for {this.props.question.id} here</h1>
    )
  }
})