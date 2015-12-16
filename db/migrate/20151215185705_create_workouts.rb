class CreateWorkouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false
      t.integer :route_id
      t.float :distance, null: false
      t.time :duration, null: false
      t.integer :calories_burned, null: false
      t.integer :elevation_gain, null: false, default: 0

      t.timestamps null: false
    end

    add_index :workouts, :user_id
    add_index :workouts, :route_id
  end
end
