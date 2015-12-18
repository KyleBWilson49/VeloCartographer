class Api::SessionsController < ApplicationController
  def show
    @current_user = current_user
    @workout_count = @current_user.workouts.count
    @total_distance = @current_user.workouts.sum('distance')
    @total_duration = @current_user.workouts.sum('duration')
    @total_calories = @current_user.workouts.sum('calories_burned')
  end
end
