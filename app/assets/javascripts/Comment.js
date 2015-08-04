Comment = function(attributes){
  $.extend(this, attributes);
};

Comment.find = function(question_id){
  return App.request('get', '/questions/'+question_id+'/comments').then(function(comments){
    return comments.map(function(attributes){
      return new Comment(attributes);
    });
  });
};

