class StatesController < ApplicationController
    before_action :authorize
    def index
        render json: State.all
    end

    def show
        render json: find_state
    end

    def create
        state = State.create(params)
        render json: state, status: created
    end
    private

    def params
        params.permit(:name)
    end
    
    def find_state
        State.find_by_id(params[:id])
    end

end
