QuestionComments = React.createClass({

  propTypes:{
    questions: React.PropTypes.array.isRequired,
    onSelect:  React.PropTypes.func.isRequired,
  },

  handleCommentSubmit: function() {
    return App.request('post', action, formData).bind(this);
  },

  render: function(){
    return (
      <div className="comment-box"
        <CommentList comments={ this.state.comments.find(gon.question_id) } />
        <h1>Add a comment for {this.props.question.id} here:</h1>
        <CommentForm form= { this.state.form }
        onCommentSubmit={ this.handleCommentSubmit } />
      </div>
    );
  }
});