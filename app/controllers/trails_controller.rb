class TrailsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    skip_before_action :authorize, only: [:index]
    # before_action :authorize, only: [:show]

    def index
        # byebug
        render json: Trail.all
    end
    def show
        trail = Trail.find(params[:id])
        render json: trail
    end

    def create
        trail = @current_user.trails.create!(trail_params)
        render json: trail, status: :created
    end
        
        
    # def update
    #     trail = @current_user.trails.find(params[:id])
    #     trail.update(trail_params)
    #     render json: trail
    # end

    # def destroy
    #     trail = @current_user.trails.find(params[:id])
    #     trail.destroy
    #     head :no_content
    # end


    private 
    
    def trail_params
        params.permit(:name, :description, :miles, :image_url)
    end

    def render_not_found_response
        render json: {error: "Trail not found"}, status: :not_found
    end

end
