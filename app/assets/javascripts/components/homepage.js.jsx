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
    if (this.state.selectedQuestion === null) return <div><h2 className="content-head is-center"> Communitity Replies </h2> <p className="content-head is-center">Select a question...</p></div>;
    return (
      <QuestionComments question={this.state.selectedQuestion}/>
    )
  },


  render: function(){
    return (
      <div className="content">
        <h1 className="content-head is-center">Welcome to Veritas</h1>

        <h4>In early 2015, the New York Times published a classic Modern Love post.</h4>

        <p>Mandy Len Catron’s essay, <a href="http://www.nytimes.com/2015/01/11/fashion/modern-love-to-fall-in-love-with-anyone-do-this.html">“To Fall in Love With Anyone, Do This”</a>, claimed that a pair of strangers could fall in love after answering 36 questions together. In the essay, Catron refers to a <a href="http://psp.sagepub.com/content/23/4/363.full.pdf+html">study by the psychologist Arthur Aron (and others)</a> that explores whether intimacy between two strangers can be accelerated by having them ask each other a specific series of personal questions. Not surprisingly, the essay went viral.</p>

        <h4>And then a lot of people got nervous.</h4>

        <p>Imagine this scenario: your partner / wife / boyfriend / summer fling read the article and wants to talk about the questions on your date tonight. Are you ready to answer?</p>

        <h4>At Veritas, we make this conversation a little less scary.</h4>
        <p>We provide a space for you to test out your answers with the community first, before having to answer the questions with your partner.</p>


        <div className="pure-g">
            <div className="l-box-lrg pure-u-1-2">
            <h2 className="content-head is-center"> To begin, find a question you would like to answer. </h2>
              {this.renderQuestions()}
            </div>

            <div className="l-box-lrg pure-u-1-2">
              {this.renderComments()}
            </div>
        </div>

      </div>





    );
  }

});
