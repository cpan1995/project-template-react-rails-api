class SchoolClassSerializer < ActiveModel::Serializer
  attributes :id, :grade, :homeworks
  has_one :user
end
