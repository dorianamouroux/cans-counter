# cans-counter
API for the application to figure out how many cans I drink a day

## routes

#### GET /user
Return the list of users

#### GET /user/:user_id
Return one user

#### POST /user
###### params = name
Add a new user with name 'name'

#### POST /cans/:user_id
Add a new can to the list of this user
