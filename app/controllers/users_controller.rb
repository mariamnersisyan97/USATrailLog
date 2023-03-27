class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    # before_action :authorize, only: [:show]

    def show 
        render json: @current_user
    end

    def index 
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
       end


   private

   def user_params
    params.permit(:username, :password, :password_confirmation)
   end
end
