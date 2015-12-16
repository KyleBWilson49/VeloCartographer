Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
    resources :users, only: [:new, :create, :show, :index, :update]
    resources :workouts, only: [:create, :index, :show, :update]
    resource :session, only: [:show]
  end

  resource :session, only: [:new, :create, :destroy]
end
