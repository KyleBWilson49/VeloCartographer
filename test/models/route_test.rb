# == Schema Information
#
# Table name: routes
#
#  id                :integer          not null, primary key
#  user_id           :integer          not null
#  route_path        :text             not null
#  route_name        :string           not null
#  elevation_gain    :integer          not null
#  distance          :float            not null
#  route_description :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
