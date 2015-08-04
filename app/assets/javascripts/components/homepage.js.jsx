HomePage = React.createClass({
  getInitialState: function() {
    return {
      questions: null,
      selectedQuestion: null,
    }
  },

  componentDidMount: function() {
    Question.all().then(function(questions){
      this.setState({questions: questions})
    }.bind(this))
  },

  selectQuestion: function(question){
    this.setState({selectedQuestion: question})
  },

  renderQuestions: function(){
    if (this.state.questions === null) return 'Loading...';
    return (
      <QuestionList questions={this.state.questions} onSelect={this.selectQuestion}/>
    );
  },

  renderComments: function(){
    if (this.state.selectedQuestion === null) return;
    return (
      <QuestionComments question={this.state.selectedQuestion} />
    )
  },


  render: function(){
    return (
      <div className="HomePage">
        <h1>Welcome to Veritas</h1>

        <p><b>In early 2015</b>, the New York Times published Mandy Len Catron’s Modern Love essay, <a href="http://www.nytimes.com/2015/01/11/fashion/modern-love-to-fall-in-love-with-anyone-do-this.html">“To Fall in Love With Anyone, Do This”</a>.</p>

        <p> In the essay, Catron refers to a <a href="http://psp.sagepub.com/content/23/4/363.full.pdf+html">study by the psychologist Arthur Aron (and others)</a> that explores whether intimacy between two strangers can be accelerated by having them ask each other a specific series of personal questions. The 36 questions in the study are broken up into three sets, with each set intended to be more probing than the previous one.</p>

        <p><b>Imagine a scenario</b>, now that this article went viral, there is a risk your partner may sit you down and start asking theses questions. Are you ready to answer?</p>

        <p><b>At Veritas, we are here to help.</b> We provide a space for you to test out your answers with the community first before having to answer your partner </p>

        <h2> To begin, find a question you would like to answer. </h2>

        <div class="question-list-right">
        {this.renderQuestions()}
        </div>

        <div class="comment-box-left">
          {this.renderComments()}
        </div>

      </div>
    );
  }

});
