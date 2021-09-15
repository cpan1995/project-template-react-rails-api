class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    # validates :password, length: {minimum: 6}

    has_many :students, class_name: "User", foreign_key: "teacher_id"

    belongs_to :teacher, class_name: "User", optional: true
    has_many :school_classes
end
