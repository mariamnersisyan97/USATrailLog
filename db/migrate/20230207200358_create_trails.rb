class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :description
      t.string :location
      t.string :image_url
      t.integer :miles
      t.integer :user_id
      t.integer :state_id

      t.timestamps
    end
  end
end
