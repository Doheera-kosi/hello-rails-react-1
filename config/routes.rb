Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resource :greetings
    end
  end

  root "root#index"

  get '/greetings', to: 'root#index'

end
