# VeloCartographer

[Live link][heroku]

[heroku]: http://www.velocartographer.com/

## Summary

VeloCartographer is a network for cyclist to track and show off their training

Create and save cycling routes using Google Maps, log workouts to a new or saved
route, keep track of total miles logged, and see what workouts your friends
have done.

## Features

* Google Maps with bike layer for better visuals
* Google Maps Routes to display the route taken
* Google Maps Elevations displays route elevation chart
* Google Maps Roads makes for easier marker placement by snapping to roads.
* Ruby on Rails with SQL provides users feed of followed friends
* React.js creates seamless transition between pages
* BCrypt password hashing for signups and logins

## Implementation Records

### Original Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md


### Phase 1: User Authentication, Workout Model and JSON API (.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application and have a basic user page where the user can
see their own workouts. This will all be done in json, with no styling of
page. Also will get the app setup on heroku.

[Details][phase-one]

### Phase 2: Flux Architecture with User and Workout CRUD (1 days)

Phase 2 is all about setting up Flux, the React Router and React views. After
the basic flux setup is done, a user store will be set up so that the user can
have a user page. This will require a few different views to be setup. The app container view needs to be set so the outline of the site can be established.
The user view will sit in the app container. Then the workouts store will be
made. Then the workouts index view can be created to show the users workouts.
The view for the basic create workout will be made and placed on the users
page. Lastly the users feed on the home page will combine workouts for friends
and user. A user view will be made so that users can update their profile.
I will begin to use bootstrap to start styling my app.

[Details][phase-two]

### Phase 3: User Stats and Friends (1 days)

Phase 3 adds running totals for users workouts informations, along with
choosing the amount of time covered in the stats infographic. This will require
a store state for the users workout totals to be made that will show on the
users page. Choosing the time frame will cause this state to update so that
the new render will have the workouts within a certain timeframe. Add search
for other users to follow. Make totals comparable to other users.

[Details][phase-three]

### Phase 4: Create Routes Using Google Maps (3 day)

Using Google Maps API I will allow users to create and save routes. Users will
be able to select points on a map which will be collected in google maps and
the distance and elevation difference will be returned along with a picture of
the route. Users will be able to create a workout from the create route page.
users will be able to use the route again with out creating it.

[Details][phase-four]

### Phase 5: Styling Cleanup and Seeding (3 day)

Phase 5 will be about testing for any bugs and making the styling look better
I will run the site through everything it should do in many ways to find bugs.
I will then create seed data so that the site is not empty. I also want to add
a splash page so that a new user does not go straight to the log in or sign up
page.


### Bonus Features (TBD)
- [X] Make the site look better
- [X] Routes have elevation data
- [X] Save routes
- [ ] Track distance and time on bike by date ranges
- [ ] Track improvement over time
- [ ] Compare with friends
- [ ] Pagination / infinite scroll for workouts Index
- [ ] Allow user to specify run or bike
- [ ] Make routes have easier creation

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md

## About

More of my work can be found on my [portfolio][p_link]

[p_link]: http://kylebwilson49.github.io/
