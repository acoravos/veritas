class CommentsController < ApplicationController

  def index
    comments = Comment.where(question_id: params[:question_id])
    render json: comments
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.save

    if request.xhr?
      render :json => Comment.last(10)
    else
      redirect_to question_comments_path
    end
  end

  private

  def comment_params
    params.permit(:author, :text, :question_id)
  end
end

