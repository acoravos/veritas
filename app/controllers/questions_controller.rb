class QuestionsController < ApplicationController

  def show
    # questions = Question.all
    # render :json questions
    render json: Question.all
  end

end
