//= require_self
//= require_tree ./App

App = {};

App.setPath = function(path){
  history.pushState({}, document.title, path);
  $(window).trigger('pushstate');
};

App.router = function(path){

  if (path === '/') return <HomePage />
  if (path === '/tweet-box') return <TweetBox />
  return <div>Page Not Found</div>
}

$(function(){
  React.render(<MainComponent />, document.body);
});