class StatesController < ApplicationController
    def index
        render json: State.all
    end

    def show
        render json: find_state
    end

    private

    def find_state
        State.find_by_id(params[:id])
    end

end
