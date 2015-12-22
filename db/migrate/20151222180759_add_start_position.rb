class AddStartPosition < ActiveRecord::Migration
  def change
    change_table :workouts do |t|
      t.string :start_position, null: false
    end
  end
end
