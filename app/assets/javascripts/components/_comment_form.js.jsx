var CommentForm = React.createClass({

  propTypes:{
    question:        React.PropTypes.array.isRequired,
    onCommentSubmit: React.PropTypes.func.isRequired,
  },

  handleSubmit: function ( event ) {
    event.preventDefault();

    var authorNode = this.refs.author.getDOMNode();
    var textNode   = this.refs.text.getDOMNode();
    var author     = authorNode.value.trim();
    var text       = textNode.value.trim();

    // validate
    if (!text || !author) return;

    var comment = {
      text: text,
      author: author,
    };

    // submit
    this.props.onCommentSubmit(comment);

    // reset form
    authorNode.value = textNode.value = '';
  },

  render: function () {
    return (
      <form ref="form" className="comment-form" onSubmit={ this.handleSubmit }>
        <p><input ref="author" name="comment[author]" placeholder="Your name" /></p>
        <p><textarea ref="text" name="comment[text]" placeholder="Say something..." /></p>
        <p><input type="submit">Post comment</input></p>
      </form>
    )
  }
});

