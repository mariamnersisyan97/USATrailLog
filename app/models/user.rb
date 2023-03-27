class User < ApplicationRecord
    has_secure_password

    # Relations
    has_many :reviews
    has_many :trails, through: :reviews


    # Validations
    validates :username, presence: true, uniqueness: true
end 