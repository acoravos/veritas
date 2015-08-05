Rails.application.routes.draw do

  ACCEPTS_JSON = lambda { |request|
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resources :questions do
    resources :comments
  end
  end

  get '*path', to: "single_page_app#show"
  root "single_page_app#show"

end
