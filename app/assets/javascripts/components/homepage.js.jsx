HomePage = React.createClass({
    getInitialState: function(){
    return {
      path: location.pathname,
    }
  },
  render: function(){
    return (
      <div className="HomePage">
        <h1>Welcome to Veritas</h1>
        <p>In early 2015, the New York Times published Mandy Len Catron’s Modern Love essay, <a href="http://www.nytimes.com/2015/01/11/fashion/modern-love-to-fall-in-love-with-anyone-do-this.html">“To Fall in Love With Anyone, Do This”</a>.</p>
        <p> In the essay, Catron refers to a <a href="http://psp.sagepub.com/content/23/4/363.full.pdf+html">study by the psychologist Arthur Aron (and others)</a> that explores whether intimacy between two strangers can be accelerated by having them ask each other a specific series of personal questions. The 36 questions in the study are broken up into three sets, with each set intended to be more probing than the previous one.</p>
        <p> As this article went viral, more and more people were nervous that their partner might start asking such questions. At Veritas, we're here to help by creating a space for you to test out your answers with the community first. </p>
        <h2> To begin, find a question you'd like to answer. </h2>
      </div>
    );
  }
});
