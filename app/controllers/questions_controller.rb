class QuestionsController < ApplicationController

  def index
    render json: Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

end
