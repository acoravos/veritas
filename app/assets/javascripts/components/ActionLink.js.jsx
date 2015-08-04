ActionLink = React.createClass({

  onClick: function(event){
    event.preventDefault();
    if (this.props.onClick){
      this.props.onClick(event);
    }
    App.setPath(this.props.href);
  },

  render: function(){
    var props = $.extend({}, this.props);
    if (!props.href){ props.href = ''; }
    props.onClick = this.onClick;
    return React.createElement('a', props);
  }

})