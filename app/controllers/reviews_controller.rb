class ReviewsController < ApplicationController
    before_action :authorize, only: [:create]

    def index 
        render json: Review.all, status: :ok
    end

    def show 
        review = Review.all(params[:id])
        render json: review
    end

    def create
        review = @current_user.reivews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find(params[:id])
        if review && review.user_id == @current_user.id
            review.update!(review_params)
            render json: review, status: :created
        else
            render json: "Information provided was invalid"
        end
    end

    def destroy
        review = Review.find(params[:id])
        if review && review.user_id == @current_user.id
            review.destroy
            head :no_content
        else
            render json: "Information provided was invalid", status: :unauthorized
        end

    end


    private

    def review_params
        params.permit(:title, :body, :trail_id, :user_id)
end

end
