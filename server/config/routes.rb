Rails.application.routes.draw do

  resources :users, only: [:index]
  resources :exercises, only: [:index]
  
end
