Rails.application.routes.draw do
  
  # resources :trails
  # resources :users
  # resources :states

  ## User Routes
  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  ## Session Routes 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  ## Trail Routes 
  resources :trails

  ## State Routes
  resources :states

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
