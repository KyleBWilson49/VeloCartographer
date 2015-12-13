# VeloCartographer

[Heroku link][heroku] **NB:** Need to Set this up.

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

VeloCartographer is a web application inspired by MapMyRide and Strava that is
built with Rails and React.js. In VeloCartographer allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create workouts
- [ ] Track distance and time on bike
- [ ] Track improvement over time
- [ ] Compare with friends
- [ ] Create routes on map

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Workout Model and JSON API (1 day)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application and have a basic user page where the user can
see their own workouts. There will be a main page where users can see their
feed of their own workouts. This will all be done in json, with no styling of
page. Also will set get the app on to heroku.

[Details][phase-one]

### Phase 2: Flux Architecture with User and Workout CRUD (2 days)

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

### Phase 3: User Stats and Friends (2 days)

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

### Phase 5: Styling Cleanup and Seeding (1 day)

Phase 5 will be about testing for any bugs and making the styling look better
I will run the site through everything it should do in many ways to find bugs.
I will then create seed data so that the site is not empty.


### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Pagination / infinite scroll for workouts Index
- [ ] Allow user to specify run or bike

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
