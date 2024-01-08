# How To Use Pemilu Backend Using Postman

## Authorization

1. Click tab authorization on postman
2. Choose Type "Bearer Token" on the left
3. Insert token on the right

## User API

### Register User

* URL: http://localhost:4000/api/v1/user/register
* Method: `POST`
* Request Body:

```
{
  "fullName": "admGuest",
  "email": "admGuest@gmail.com",
  "password": "rahasia",
  "address": "Namek",
  "gender": "male",
  "userName": "admGuest"
}
```

### Login User

* URL: http://localhost:4000/api/v1/user/login
* Method: `POST`
* Request Body:

```
{
  "email": "admGuest@gmail.com",
  "password": "rahasia"   
}
```

## Article API

### Get All Article
`No Authorization`

* URL: http://localhost:4000/api/v1/article
* Method: `GET`
* Request Body:
  
```
[
    {
        "id": 1,
        "title": "KUCING JEMPOLAN",
        "date": "2023-07-01T00:00:00.000Z",
        "author": "admazra"
    },
    {
        "id": 2,
        "title": "NEW ARTICLE",
        "date": "2023-07-01T00:00:00.000Z",
        "author": "admGuest"
    }
]
```

### Create new article
`Authorization`

* URL: http://localhost:4000/api/v1/article
* Method: `POST`
* Request Body:

```
{
  "title": "admGuest@gmail.com",
  "image": "rahasia",
  "date": 2023-07-01,
  "description": "Lorem ipsum dolor amet wak waw" 
}
```
`Author and userId obtained from isLogin trough Authorization` 
