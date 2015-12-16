class Api::SessionsController < ApplicationController
  def show
    @current_user = current_user
  end
end
