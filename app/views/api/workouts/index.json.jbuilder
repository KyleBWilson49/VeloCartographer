json.array! @workouts do |workout|
  json.workoutId workout.id
  json.userId workout.user_id
  json.distance workout.distance
  json.duration workout.duration
  json.calories workout.calories_burned
  json.elevation_gain workout.elevation_gain
  json.title workout.title
  json.description workout.description
  json.username workout.user.username
end
