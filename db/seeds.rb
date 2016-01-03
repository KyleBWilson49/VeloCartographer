User.create({
  username: "Kyle",
  password: "password",
  weight: 175,
  birthdate: Time.new(1989, 04, 23),
  gender: "M"
})

User.create({
  username: "Sarah",
  password: "apples",
  weight: 125,
  birthdate: Time.new(1992, 07, 02),
  gender: "F"
})

User.create({
  username: "Aaron",
  password: "apples",
  weight: 190,
  birthdate: Time.new(1988, 11, 15),
  gender: "M"
})

User.create({
  username: "Andrew",
  password: "apples",
  weight: 160,
  birthdate: Time.new(1991, 12, 1),
  gender: "M"
})

User.create({
  username: "Tara",
  password: "apples",
  weight: 120,
  birthdate: Time.new(1992, 2, 16),
  gender: "F"
})

User.create({
  username: "Byron",
  password: "apples",
  weight: 180,
  birthdate: Time.new(1988, 4, 15),
  gender: "M"
})

User.create({
  username: "Zach",
  password: "apples",
  weight: 220,
  birthdate: Time.new(1987, 5, 3),
  gender: "M"
})

User.create({
  username: "Ryan",
  password: "apples",
  weight: 155,
  birthdate: Time.new(1991, 8, 15),
  gender: "M"
})

User.create({
  username: "Hannah",
  password: "apples",
  weight: 110,
  birthdate: Time.new(1993, 4, 26),
  gender: "F"
})

User.create({
  username: "May",
  password: "apples",
  weight: 110,
  birthdate: Time.new(1994, 10, 13),
  gender: "F"
})

Following.create({following_id: 2, follower_id: 1 })
Following.create({following_id: 3, follower_id: 1 })
Following.create({following_id: 1, follower_id: 2 })
Following.create({following_id: 1, follower_id: 3 })
Following.create({following_id: 3, follower_id: 1 })
Following.create({following_id: 4, follower_id: 1 })
Following.create({following_id: 5, follower_id: 1 })
Following.create({following_id: 6, follower_id: 1 })
Following.create({following_id: 7, follower_id: 1 })
Following.create({following_id: 10, follower_id: 9 })
Following.create({following_id: 10, follower_id: 8 })
Following.create({following_id: 10, follower_id: 7 })
Following.create({following_id: 10, follower_id: 5 })
Following.create({following_id: 10, follower_id: 3 })
Following.create({following_id: 9, follower_id: 6 })
Following.create({following_id: 9, follower_id: 5 })
Following.create({following_id: 9, follower_id: 4 })
Following.create({following_id: 8, follower_id: 3 })
Following.create({following_id: 8, follower_id: 2 })
Following.create({following_id: 8, follower_id: 9 })
Following.create({following_id: 7, follower_id: 5 })
Following.create({following_id: 7, follower_id: 8 })
Following.create({following_id: 7, follower_id: 10 })
Following.create({following_id: 6, follower_id: 1 })
Following.create({following_id: 6, follower_id: 1 })
Following.create({following_id: 5, follower_id: 2 })
Following.create({following_id: 5, follower_id: 4 })
Following.create({following_id: 5, follower_id: 9 })
Following.create({following_id: 4, follower_id: 10 })
Following.create({following_id: 4, follower_id: 8 })
Following.create({following_id: 4, follower_id: 2 })
Following.create({following_id: 4, follower_id: 3 })

Route.create({
  user_id: 1,
  route_path: "[[37.77262810741627,-122.50999718780298],[37.789025792953275,-122.38923085811678]]",
  route_name: "Bay to Beach",
  elevation_gain: 197,
  distance: 9.81,
  route_description: "Around the north end"
})

Route.create({
  user_id: 1,
  route_path: "[[37.7830974866685,-122.4092423002719],[37.7772612498306,-122.43516688612954]]",
  route_name: "Commute",
  elevation_gain: 0,
  distance: 1.57,
  route_description: "ride to class"
  })

Route.create({
  user_id: 10,
  route_path: "[[37.77319220687751,-122.44082366256896],[37.77528267437485,-122.45843106161215],[37.77288050263907,-122.51099825927986],[37.76408761725046,-122.50974613304334],[37.77355570686374,-122.44089453942149]]",
  route_name: "Around The Park",
  elevation_gain: 226,
  distance: 9.39,
  route_description: "golden gate park"
})

Route.create({
  user_id: 2,
  route_path: "[[37.788420406882864,-122.39002209323223],[37.86165243907689,-122.49036716010022],[37.792657916572765,-122.3910558772618]]",
  route_name: "Across The Bridge",
  elevation_gain: 396,
  distance: 21.92,
  route_description: "out and back"
})

Route.create({
  user_id: 3,
  route_path: "[[37.77397313466747,-122.51089226734007],[37.6299025828304,-122.49327249928513],[37.66967080955304,-122.48753740151255],[37.77424187607269,-122.51147598792733]]",
  route_name: "Down the Shore",
  elevation_gain: 465,
  distance: 22.51,
  route_description: "two little hills"
})

Route.create({
  user_id: 5,
  route_path: "[[37.781373767140956,-122.41141654332375],[37.77645811884421,-122.41764252736368],[37.8051192769489,-122.42364425732751],[37.80861477071381,-122.41283604726021],[37.79533394762831,-122.39394952104124],[37.78152654908751,-122.41122288407479]]",
  route_name: "Lunch Route",
  elevation_gain: 70,
  distance: 6.53,
  route_description: "Fun ride around NE SF"
})

Route.create({
  user_id: 6,
  route_path: "[[37.781356719851416,-122.4114380007062],[37.7623393606189,-122.43753114613435],[37.76503909292874,-122.44761625767836],[37.76041875356858,-122.4637640410582],[37.74309947028108,-122.45520935432057],[37.76296882691444,-122.43477865209661],[37.78099918190455,-122.41188677655225]]",
  route_name: "Midtown Terrace",
  elevation_gain: 307,
  distance: 9.45,
  route_description: "few hills"
})

Route.create({
  user_id: 2,
  route_path: "[[37.76065463755746,-122.42829553176034],[37.76053481261758,-122.50986046685017],[37.82854324932416,-122.52686211060279],[37.76091234861976,-122.42831607254033]]",
  route_name: "Headlands",
  elevation_gain: 717,
  distance: 28.27,
  route_description: "very hilly route"
})

Workout.create({
  user_id: 1,
  route_id: 1,
  distance: 9.81,
  calories_burned: 392,
  elevation_gain: 197,
  title: "Afternoon Ride",
  description: "Around the north side of SF",
  duration: 2702,
  start_position: "37.789025792953275,-122.38923085811678"
})

Workout.create({
  user_id: 1,
  route_id: 1,
  distance: 1.57,
  calories_burned: 62,
  elevation_gain: 0,
  title: "Monday Morning",
  description: "all downhill",
  duration: 900,
  start_position: "37.7772612498306,-122.43516688612954"
})

Workout.create({
  user_id: 1,
  route_id: 3,
  distance: 9.39,
  calories_burned: 375,
  elevation_gain: 226,
  title: "Easy Ride",
  description: "not much to say",
  duration: 2720,
  start_position: "37.77355570686374,-122.44089453942149"
})

Workout.create({
  user_id: 2,
  route_id: 3,
  distance: 9.39,
  calories_burned: 375,
  elevation_gain: 226,
  title: "Ride With Friends",
  description: "park ride",
  duration: 2720,
  start_position: "37.77355570686374,-122.44089453942149"
})

Workout.create({
  user_id: 3,
  route_id: 3,
  distance: 9.39,
  calories_burned: 375,
  elevation_gain: 226,
  title: "Easy Sunday Ride",
  description: "through the park to the beach",
  duration: 2720,
  start_position: "37.77355570686374,-122.44089453942149"
})

Workout.create({
  user_id: 5,
  route_id: 3,
  distance: 9.39,
  calories_burned: 375,
  elevation_gain: 226,
  title: "Sunday Ride",
  description: "group ride through the park",
  duration: 2720,
  start_position: "37.77355570686374,-122.44089453942149"
})

Workout.create({
  user_id: 6,
  route_id: 3,
  distance: 6.53,
  calories_burned: 261,
  elevation_gain: 70,
  title: "lunch ride",
  description: "fast and fun",
  duration: 1512,
  start_position: "37.78152654908751,-122.41122288407479"
})

Workout.create({
  user_id: 7,
  route_id: 3,
  distance: 9.39,
  calories_burned: 375,
  elevation_gain: 226,
  title: "Sunday Romp Through The Park",
  description: "out to the beach",
  duration: 2720,
  start_position: "37.77355570686374,-122.44089453942149"
})

Workout.create({
  user_id: 8,
  route_id: 3,
  distance: 9.39,
  calories_burned: 375,
  elevation_gain: 226,
  title: "Out and About",
  description: "riding around after work",
  duration: 2620,
  start_position: "37.77355570686374,-122.44089453942149"
})

Workout.create({
  user_id: 9,
  route_id: 3,
  distance: 9.39,
  calories_burned: 375,
  elevation_gain: 226,
  title: "Easy Sunday Group Ride",
  description: "it was very windy at the beach",
  duration: 2720,
  start_position: "37.77355570686374,-122.44089453942149"
})

Workout.create({
  user_id: 10,
  route_id: 3,
  distance: 9.45,
  calories_burned: 378,
  elevation_gain: 307,
  title: "Evening Cruise",
  description: "easy ride",
  duration: 2160,
  start_position: "37.78099918190455,-122.41188677655225"
})

Workout.create({
  user_id: 2,
  route_id: 3,
  distance: 9.45,
  calories_burned: 378,
  elevation_gain: 307,
  title: "Afternoon Spin",
  description: "went to spin the legs",
  duration: 2160,
  start_position: "37.78099918190455,-122.41188677655225"
})

Workout.create ({
  user_id: 1,
  distance: 6.53,
  calories_burned: 261,
  elevation_gain: 70,
  title: "Lunch Ride",
  description: "get out of the office",
  duration: 1703,
  start_position: "37.78152654908751,-122.41122288407479"
})

Workout.create ({
  user_id: 2,
  distance: 9.67,
  calories_burned: 386,
  elevation_gain: 313,
  title: "Ride to Midtown Terrace",
  description: "easy out and back",
  duration: 1958,
  start_position: "37.78099918190455,-122.41188677655225"
})

Workout.create ({
  user_id: 2,
  distance: 28.27,
  calories_burned: 1130,
  elevation_gain: 717,
  title: "Hammer day",
  description: "so very tired",
  duration: 4703,
  start_position: "37.76091234861976,-122.42831607254033"
})

Workout.create ({
  user_id: 10,
  distance: 28.27,
  calories_burned: 1130,
  elevation_gain: 717,
  title: "Fast Ride",
  description: "group ride",
  duration: 4703,
  start_position: "37.76091234861976,-122.42831607254033"
})

Workout.create ({
  user_id: 9,
  distance: 28.27,
  calories_burned: 1130,
  elevation_gain: 717,
  title: "Sat Morning Ride",
  description: "we pushed the pace today",
  duration: 4703,
  start_position: "37.76091234861976,-122.42831607254033"
})

Workout.create ({
  user_id: 8,
  distance: 28.27,
  calories_burned: 1130,
  elevation_gain: 717,
  title: "Saturday Ride",
  description: "struggled to keep up",
  duration: 4703,
  start_position: "37.76091234861976,-122.42831607254033"
})

Workout.create ({
  user_id: 7,
  distance: 28.27,
  calories_burned: 1130,
  elevation_gain: 717,
  title: "Group Ride",
  description: "fun time out",
  duration: 4703,
  start_position: "37.76091234861976,-122.42831607254033"
})

Workout.create ({
  user_id: 6,
  distance: 6.53,
  calories_burned: 261,
  elevation_gain: 70,
  title: "Lunch Outting",
  description: "stretch out the legs",
  duration: 1703,
  start_position: "37.78152654908751,-122.41122288407479"
})

Workout.create({
  user_id: 3,
  route_id: 1,
  distance: 1.57,
  calories_burned: 62,
  elevation_gain: 0,
  title: "Tuesday Morning",
  description: "ride to work",
  duration: 900,
  start_position: "37.7772612498306,-122.43516688612954"
})

Workout.create({
  user_id: 3,
  distance: 22.51,
  calories_burned: 900,
  elevation_gain: 465,
  title: "Beach Ride",
  description: "easy ride down the coast",
  duration: 3959,
  start_position: "37.77424187607269,-122.51147598792733"
})

Workout.create({
  user_id: 4,
  distance: 17.52,
  calories_burned: 700,
  elevation_gain: 334,
  title: "Bay to Beach and Back",
  description: "fast loop",
  duration: 2909,
  start_position: "37.789025792953275,-122.38923085811678"
})

Workout.create({
  user_id: 5,
  route_id: 3,
  distance: 9.39,
  calories_burned: 375,
  elevation_gain: 226,
  title: "Fast Evening Ride",
  description: "To the beach",
  duration: 2034,
  start_position: "37.77355570686374,-122.44089453942149"
})

Workout.create ({
  user_id: 4,
  distance: 28.27,
  calories_burned: 1130,
  elevation_gain: 717,
  title: "Normal Wednesday Night Ride",
  description: "interval day",
  duration: 4936,
  start_position: "37.76091234861976,-122.42831607254033"
})

Workout.create ({
  user_id: 4,
  distance: 28.27,
  calories_burned: 1130,
  elevation_gain: 717,
  title: "How Fast Can I Go",
  description: "pushed the pace as hard as I could",
  duration: 4620,
  start_position: "37.76091234861976,-122.42831607254033"
})
