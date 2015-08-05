require 'rails_helper'

RSpec.describe QuestionsController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #show" do
    xit "returns http success" do
      fake_question = double :question
      expect(Question).to receive(:find).with('1').and_return(fake_question)
      get :show, id: 1
      expect(response).to have_http_status(:success)
    end
  end

end