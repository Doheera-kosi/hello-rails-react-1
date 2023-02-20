# frozen_string_literal: true

class Api::V1::Users::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authentically_token, raise: false
  protect_from_forgery with: :null_session


  respond_to :json

  private 
  def respond_with(resource, options={})
    if resource.persisted?
      render json: {
        status: { code: 200, message: 'Sign up successfully',
        data: resource }
      }, status: :ok
    else 
      render json: {
       status: { message: 'Users could not be created successfully',
      errors: resource.errors.full_messages }, status: :unprocessable_entity
    }
  end
  end

end
