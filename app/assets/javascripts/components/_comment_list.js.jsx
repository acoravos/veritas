var CommentList = React.createClass({

  propTypes:{
    comments: React.PropTypes.array.isRequired,
  },

  render: function () {
    var commentNodes = this.props.comments.map(function ( comment ) {
      return <div key={comment.id}>
        <h5>{comment.author} says:</h5> <p>{comment.text}</p><br></br>
        </div>
    });

    return (
      <div className="comment-list">
        { commentNodes }
      </div>
    )
  }
});
