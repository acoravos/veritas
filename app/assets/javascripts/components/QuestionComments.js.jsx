QuestionComments = React.createClass({

  propTypes:{
    question: React.PropTypes.object.isRequired,
  },

  getInitialState: function(){
    return {
      comments: null,
    }
  },

  loadComments: function(question_id){
    Comment.forQuestion(question_id).then(function(comments){
      this.setState({comments: comments});
    }.bind(this))
  },

  componentDidMount: function(){
    this.loadComments(this.props.question.id);
  },

  componentWillReceiveProps: function(props){
    if (this.props.question.id !== props.question.id){
      this.setState({comments: null});
      this.loadComments(props.question.id);
    }
  },

  handleCommentSubmit: function(question){
    debugger
  },

  render: function(){
    var comments;
    if (this.state.comments === null){
      comments = <div>Loading...</div>
    }else if (this.state.comments.length === 0){
      comments = <div>no comments</div>
    }else{
      comments = <CommentList comments={this.state.comments} />
    }
    return (
      <div className="comment-box">
        {comments}
        <h1>Add a comment for {this.props.question.id} here:</h1>
        <CommentForm question={this.props.question} onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});
