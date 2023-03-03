class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :trails
  has_many :states, through: :trails
end
