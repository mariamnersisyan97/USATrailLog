class Trail < ApplicationRecord
    # Relations
    has_many :reviews, dependent: :destroy
    # has_many :users, through: :reviews

    # Validations
    validates :image_url, presence: true
    validates :description, presence: true
    validates :miles, presence: true
    validates :name, presence: true

end
