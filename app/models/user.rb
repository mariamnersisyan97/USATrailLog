class User < ApplicationRecord
    has_many :trails
    has_many :states, through: :trails
    # has_many :states, -> { distinct }, through: :trails


    validates :username, presence: true, uniqueness: true
end


