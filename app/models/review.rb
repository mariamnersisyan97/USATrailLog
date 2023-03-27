class Review < ApplicationRecord
    # Relations
    belongs_to :trail 
    belongs_to :user

    # Validations
    validates :title, presence: true
    validates :body, presence: true
end
 