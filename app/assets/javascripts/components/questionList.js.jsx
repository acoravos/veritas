var QuestionList = React.createClass({

  handleClick: function(){
    this.props.addToTourGuide({truth: this.props.truth})
  }

})