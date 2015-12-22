# == Schema Information
#
# Table name: workouts
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  route_id        :integer
#  distance        :float            not null
#  calories_burned :integer          not null
#  elevation_gain  :integer          default(0), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  title           :string           not null
#  description     :text
#  duration        :integer          not null
#  start_position  :string           not null
#

class Workout < ActiveRecord::Base
  validates :user_id, :distance, :duration, presence: true
  validates :elevation_gain, :calories_burned, presence: true

  belongs_to :user
end
