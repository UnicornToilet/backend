Unicorn Toilet
===
> a backend REST API for the Unicorn Toilet App

## API Resources
#### User Model

* `_id` 
* `email` 
* `username` 
* `passwordHash` 
* `tokenSeed` 
* `preferences` - object storing user's preset filters

#### Toilet Model

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
* delete a `USER` profile 


