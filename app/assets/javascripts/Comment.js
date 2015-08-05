Comment = function(attributes){
  $.extend(this, attributes);
};

Comment.forQuestion = function(question_id){
  var path = '/questions/'+question_id+'/comments';
  return App.request('get', path).then(function(comments){
    return comments.map(function(attributes){
      return new Comment(attributes);
    });
  });
};

