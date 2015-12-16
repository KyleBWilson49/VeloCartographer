class Api::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
  end

  def show
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user_id = current_user.id
    
    if @workout.save
      render :index
    else
      render json: @workout.errors.full_messages
    end
  end

  def update
  end

  private
  def workout_params
    params.require(:workout).permit(:route_id, :distance, :duration,
      :calories_burned, :elevation_gain, :title, :description)
  end
end
