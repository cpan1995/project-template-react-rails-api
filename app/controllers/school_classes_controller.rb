class SchoolClassesController < ApplicationController   
rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def user_classes
        user = User.find(params[:id])
        classes = user.classes
        render json: classes       
    end

    private 

    def not_found
        render json: {error: "Not found"}, status: :not_found 
    end
end
