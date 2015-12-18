class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.includes(:followings).find(params[:id])
    @workout_count = @user.workouts.count
    @total_distance = @user.workouts.sum('distance')
    @total_duration = @user.workouts.sum('duration')
    @total_calories = @user.workouts.sum('calories_burned')
  end

  def new
    @user = User.new
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)

    @current_user = current_user

    render :update
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      redirect_to "/"
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :birthdate, :weight, :gender)
  end
end
