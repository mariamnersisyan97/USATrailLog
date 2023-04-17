class ReviewSerializer < ActiveModel::Serializer
  attributes :title, :body, :user_id, :trail_id

  has_one :trail
  has_one :user 
  
  belongs_to :trail
  belongs_to :user

end
