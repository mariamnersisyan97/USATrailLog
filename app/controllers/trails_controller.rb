class TrailsController < ApplicationController
    before_action :authorize
    def index
        render json: Trail.all
    end
    def show
        render json: find_trail
    end

    def create 
        trail = @current_user.trails.create!(trail_params)
        render json: trail, status: :created
    end

    def destroy

    end


    private 
    
    def trail_params
        params.permit(:name, :description, :location, :image_url, :miles, :state_id)
    end

    def find_trail
        Trail.find_by_id(params[:id])    
    end

end
