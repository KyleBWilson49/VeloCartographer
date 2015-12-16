class AddColumns < ActiveRecord::Migration
  def change
    change_table :workouts do |t|
      t.string :title, null: false
      t.text :description
    end
  end
end
