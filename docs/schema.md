# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
weight          | integer   | not null
gender          | string    | not null
birthdate       | date      | not null


## routes

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
route_positions | text      | not null
route_name      | string    | not null
elev_diff       | integer   | not null
distance        | float     | not null



## workouts

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
route_id        | integer   | foreign key
distance        | float     | not null
duration        | time      | not null
elevation_gain  | integer   | not null
calories_burned | integer   | not null

## Followers

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
follower_id     | integer   | not null, foreign key
following_id    | integer   | not null, foreign key
