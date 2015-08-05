MainComponent = React.createClass({

  getInitialState: function(){
    return {
      path: location.pathname,
    }
  },

  onPathChange: function(){
    this.setState({path: location.pathname});
  },

  componentDidMount: function(){
    $(window).on('pushstate popstate', this.onPathChange);
  },

  componentWillUnmount: function(){
    $(window).off('pushstate popstate', this.onPathChange);
  },

  render: function(){
    return App.router(this.state.path);
  }

});