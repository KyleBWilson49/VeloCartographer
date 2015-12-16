class AddGender < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :gender, null: false
    end
  end
end
