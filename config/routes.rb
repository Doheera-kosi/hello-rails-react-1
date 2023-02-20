Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    scope :v1 do 
      devise_for :users,
      controllers: {
        sessions: 'api/v1/users/sessions',
        registrations: 'api/v1/users/registrations'
      }
    end
  end
  
  namespace :api do
    namespace :v1 do
      resource :greetings
    end
  end

  root "greetings#index"

  resource :greeting
 
end
