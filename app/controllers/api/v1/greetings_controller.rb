class Api::V1::GreetingsController < ApiController
  def show
    @greetings = Greeting.order('RANDOM()').first
    render json: @greetings, status: :ok
  end
end
