class State < ApplicationRecord
    has_many :trails
    has_many :users,  -> { distinct }, through: :trails
end
