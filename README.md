Unicorn Toilet
===
> a backend REST API for the Unicorn Toilet App

* Start the server `yarn start`

## API Resources
#### User Model

* `_id` 
* `email` 
* `username` 
* `passwordHash` 
* `tokenSeed` 
* `preferences` - object storing user's preset filters

#### Toilet Model
Each user can have a single profile. Authorization is required for Creating, Updating, and Deleteing Profiles but they have public read access.  

* `_id` 
* `name` 
* `location` - Lat/Lng Coords
* `overallQuality` - % of up/down votes
* `tpQuality` - 1-5
* `occupancy` - Single or Multiple
* `soap` - Foam or Gel
* `dryingMethod` - Paper Towel or Air Dry or Both
* `babyChanging` - True or False
* `votes` - Up / Down / Total



## RESTFUL API Routes
/api/users
/api/toilets

#### Get Requests
* get all `TOILET` entries

#### Post Requests 
* create a new `USER` profile
* create a new `TOILET` entry

#### Put Requests
* update `USER` preferences
* update `TOILET` data

### Delete Requests
* delete a user profile 


