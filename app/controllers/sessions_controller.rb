class SessionsController < ApplicationController
  # before_action :require_signed_out!, only: [:create]
  before_action :require_signed_in!, only: [:destroy]
  before_action :sign_out, only: [:new, :create]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      redirect_to "/"
    else
      flash.now[:errors] = ['Invalid username or password']
      @user = User.new
      render :new
    end
  end

  def destroy
    sign_out
  end
end
