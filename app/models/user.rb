class User < ApplicationRecord
    has_many :trails
    has_many :states, -> { distinct }, through: :trails
end


