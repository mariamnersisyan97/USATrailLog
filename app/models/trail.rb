class Trail < ApplicationRecord
    # belongs_to :user
    belongs_to :user, optional: true
    belongs_to :state, optional: true


end
