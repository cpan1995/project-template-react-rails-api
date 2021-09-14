class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
    # skip_before_action :teacherAuthorize, only: :create
    skip_before_action :studentAuthorize, only: :create

    # def create 
    #     user = User.create(user_params)
    #     if user.valid? 
    #         session[:user_id]= user.id
    #         render json: user, status: :created 
    #     else 
    #         render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    #     end 
    # end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user
        else 
            render json: {error: "Not authorized"}, status: :unauthorized 
        end
    end
    
    def student_list
        teacher = User.find(params[:id])
        students = teacher.students
        render json: students
    end

    def find_all_teachers
        allTeachers = User.all.where(is_teacher: true)
        render json: allTeachers
    end
        
    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :is_teacher, :teacher_id)
    end

    def not_found
        render json: {error: "Not found"}, status: :not_found
    end

end
