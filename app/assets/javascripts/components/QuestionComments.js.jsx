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
    App.request('post', path, dataObject)
    this.loadComments(question_id)
  },

  render: function(){
    var comments;
    if (this.state.comments === null){
      comments = <div>Loading...</div>
    }else if (this.state.comments.length === 0){
      comments = <div>No comments yet. Be a brave soul, and be the first to share your thoughts.</div>
    }else{
      comments = <CommentList comments={this.state.comments} />
    }
    return (
      <div className="comment-box">
        <h2 className="content-head is-center">Share your thoughts</h2>
        <p className="content-head is-center">{this.props.question.truth}</p>
        <CommentForm question={this.props.question} onCommentSubmit={this.handleCommentSubmit} />
        <h2 className="content-head is-center">Community Replies</h2>
        {comments}
      </div>
    );
  }
});
