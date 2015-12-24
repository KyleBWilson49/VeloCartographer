class Api::RoutesController < ApplicationController
  def create
    @route = Route.new(route_params)
    @route.user_id = current_user.id

    if @route.save
      render :index
    end
  end

  def show
  end

  def index
    @routes = Route.all
  end

  private
  def route_params
    params.require(:route).permit(:route_path, :route_name, :elevation_gain,
      :distance, :route_description)
  end
end
