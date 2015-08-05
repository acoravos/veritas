require 'rails_helper'

RSpec.describe QuestionsController, type: :request do

  before(:each){
    Question.create truth: "Truth"
  }

  describe "GET #index" do

    it "returns http success" do
      get "/questions", {}, { Accept: :json }
      expect(response.status).to eq 200
    end

    it "returns a json object that is an array of questions" do
      get "/questions", {}, { Accept: :json }
      expect(JSON.parse(response.body)[0]["truth"]).to eq "Truth"
    end

  end

end