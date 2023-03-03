class StateSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :trails

end
