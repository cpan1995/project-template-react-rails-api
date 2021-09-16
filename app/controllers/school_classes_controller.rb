class SchoolClassesController < ApplicationController   
rescue_from ActiveRecord::RecordNotFound, with: :not_found
rescue_from ActiveRecord::RecordInvalid, with: :show_errors


    def create
        new_class_info = SchoolClass.create!(school_classes_params)
        render json: new_class_info
    end

    def class_list
        user = User.find(params[:id])
        classes = user.school_classes
        render json: classes      
    end

    def update_hw
        school_classes = SchoolClass.find(params[:id])
        school_classes.update(homeworks: params[:homeworks])
        render json: school_classes.homeworks
    end

    def teacher_classes
        teacher = User.find_by(id: params[:id])
        students = User.where(teacher_id: teacher.id)
        classes = SchoolClass.all.where(subject: params[:subject])
        
        # student_classes = classes.user
        render json: students

    end

    private 

    def school_classes_params
        params.permit(:user_id, :grade, :homeworks, :subject)
    end

    def not_found
        render json: {error: "Not found"}, status: :not_found 
    end

    def show_errors
        render json: {error: "Can't Make This Homie"}, status: :not_found
    end
end
