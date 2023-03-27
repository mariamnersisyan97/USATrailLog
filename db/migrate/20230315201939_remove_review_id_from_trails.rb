class RemoveReviewIdFromTrails < ActiveRecord::Migration[6.1]
  def change
    remove_column :trails, :review_id
  end
end
