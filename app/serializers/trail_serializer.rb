class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :image_url, :miles, :user_id, :state_id
end
