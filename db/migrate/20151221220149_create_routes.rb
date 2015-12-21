class CreateRoutes < ActiveRecord::Migration
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.text :route_path, null: false
      t.string :route_name, null: false
      t.integer :elevation_gain, null: false
      t.float :distance, null: false
      t.text :route_description

      t.timestamps null: false
    end

    add_index :routes, :user_id
  end
end
