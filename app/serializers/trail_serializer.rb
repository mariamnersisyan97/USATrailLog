class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :miles


  has_many :reviews
  

end
