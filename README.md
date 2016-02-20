# cans-counter
API to figure out how many cans I drink a day

## How this API works
The API always return datas in this format :  
```json
{
  "status": "ok",
  "data": []
}
```
If there is any problem, status is equal to "ko" and "data" contains the error message.  
If there is no problem, status is equal to "ok" and "data" contains requested data (see below).

## routes

#### GET /user
Return the list of users

data =  
```json
[
  {
    "_id":"56c5e1e5ca84b52c134df9f6",
    "name":"Dorian",
    "cans":[
      {
        "_id":"56c5e849e6af029a1322e607",
        "date":"2016-02-18T15:50:33.532Z"
      }
    ]
  }
]
```

#### GET /user/:user_id
Return one user

data =  
```json
{
  "_id":"56c5e1e5ca84b52c134df9f6",
  "name":"Dorian",
  "cans":[
    {
      "_id":"56c5e849e6af029a1322e607",
      "date":"2016-02-18T15:50:33.532Z"
    }
  ]
}
```

#### POST /user
###### params = name
Add a new user with name 'name'

data =
```json
{
    "name": "Dorian",
    "_id": "56c8af8eaa12e7ce2463566a",
    "cans": []
  }
```

#### POST /cans/:user_id
Add a new can to the list of this user  
Return nothing
