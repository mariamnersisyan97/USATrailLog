class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.float :miles
      t.integer :user_id
      t.integer :state_id

      t.timestamps
    end
  end
end
 # rails g migration RenameReviewColumn --no-test-framework