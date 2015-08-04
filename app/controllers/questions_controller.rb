class QuestionsController < ApplicationController

  def show
    questions = Question.all
    render :json questions
  end

end
