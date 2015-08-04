Rails.application.routes.draw do

  get 'single_page_app/show'

  ACCEPTS_JSON = lambda { |request|
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resource :questions
    resource :comments
  end

  get '*path', to: "single_page_app#show"
  root "single_page_app#show"

end
