class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :image_url, :miles, :state_id

  belongs_to :state 
  belongs_to :user
  

end
