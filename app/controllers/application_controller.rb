class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :studentAuthorize

  # def teacherAuthorize
  #   @current_user = User.find_by(id: session[:user_id])

  #   render json: { errors: ["Not Authroized"] }, status: :unauthorized if @current_user.is_teacher
    
  # end

  def studentAuthorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not Authroized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
