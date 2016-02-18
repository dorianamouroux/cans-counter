# cans-counter
API for the application to figure out how many cans I drink a day

## routes

#### GET /users
Return the list of users

#### POST /cans
###### params = name
Add a new user with name 'name'

#### GET /cans
###### params = user_id
Return all cans the users drank

#### POST /cans
###### params = user_id
Add a new can to the list of this user
