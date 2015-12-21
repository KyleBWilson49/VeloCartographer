Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
    resources :users, only: [:new, :create, :show, :index, :update] do
      resource :following, only: [:create, :destroy]
    end
    resources :workouts, only: [:create, :index, :show, :update]
    resource :session, only: [:show]
    resources :routes, only: [:create, :show, :index]
  end

  resource :session, only: [:new, :create, :destroy]
end
