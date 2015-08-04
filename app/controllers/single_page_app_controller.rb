class SinglePageAppController < ApplicationController

  def show
    questions = Question.all
    render json: questions
  end

  # def show
  #   @challenge = RandomChallenge.find(params[:id])
  #   render json: @challenege
  # end

end
