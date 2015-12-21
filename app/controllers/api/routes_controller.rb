class Api::RoutesController < ApplicationController
  def create
    @route = Route.new(route_params)
    @route.user_id = current_user.id

    @route.save
  end

  def show
  end

  def index
  end

  private
  def route_params
    params.require(:route).permit(:route_path, :route_name, :elevation_gain,
      :distance, :route_description)
  end
end
