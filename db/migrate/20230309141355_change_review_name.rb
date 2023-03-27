class ChangeReviewName < ActiveRecord::Migration[6.1]
  def change
    rename_column :trails, :state_id, :review_id
  end
end
