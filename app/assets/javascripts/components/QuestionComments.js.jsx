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

  handleCommentSubmit: function(dataObject){
    var question_id = this.props.question.id
    var path = '/questions/'+question_id+'/comments'
    debugger
    App.request('post', path, dataObject.serialize())

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
        <h2 className="content-head is-center">Provide your answer for "{this.props.question.truth}":</h2>
        <CommentForm question={this.props.question} onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});
