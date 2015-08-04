class QuestionsController < ApplicationController

  def index
    # questions = Question.all
    # render :json questions
    render json: Question.all
  end

end
