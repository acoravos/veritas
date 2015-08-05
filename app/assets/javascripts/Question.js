Question = function(attributes){
  $.extend(this, attributes);
};

Question.prototype.comments = function(){

}

Question.all = function(){
  return App.request('get', '/questions').then(function(questions){
    return questions.map(function(attributes){
      return new Question(attributes);
    });
  });
};

