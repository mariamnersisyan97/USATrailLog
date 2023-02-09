class Trail < ApplicationRecord
    belongs_to :users
    belongs_to :states
end
