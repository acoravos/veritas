var CommentList = React.createClass({

  propTypes:{
    comments: React.PropTypes.array.isRequired,
  },

  render: function () {
    var commentNodes = this.props.comments.map(function ( comment ) {
      // return <Comment author={ comment.author } text={ comment.text } key={ comment.id } />
      return <div key={comment.id}>{comment.comment}</div>
    });

    return (
      <div className="comment-list">
        { commentNodes }
      </div>
    )
  }
});



// var Comment = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h4>{ this.props.author } said:</h4>
//         <p>{ this.props.text }</p>
//       </div>
//     )
//   }
// });