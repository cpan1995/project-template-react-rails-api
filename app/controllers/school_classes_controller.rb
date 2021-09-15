class SchoolClassesController < ApplicationController   
rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def class_list
        user = User.find(params[:id])
        classes = user.classes
        render json: classes       
    end

    def teacher_classes
        teacher = User.find_by(id: params[:id])
        students = User.where(teacher_id: teacher.id)
        classes = SchoolClass.all.where(subject: params[:subject])
        
        # student_classes = classes.user
        render json: students.school_classes

    end

    private 

    def not_found
        render json: {error: "Not found"}, status: :not_found 
    end
end
