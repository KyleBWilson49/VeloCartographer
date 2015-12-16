class AddDurationColumn < ActiveRecord::Migration
  def change
    add_column(:workouts, :duration, :integer, null: false)
  end
end
