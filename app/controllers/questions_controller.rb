class QuestionsController < ApplicationController

  def index
    # questions = Question.all
    # render :json questions
    render json: Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

end
