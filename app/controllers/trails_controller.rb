class TrailsController < ApplicationController
    def index
        render json: Trail.all
    end
    def show
        render json: find_trail
    end

    # def destroy
      

    # end



    private 

    def find_trail
        Trail.find_by_id(params[:id])    
    end
end
