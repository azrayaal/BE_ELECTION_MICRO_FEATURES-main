# How To Use Pemilu Backend Using Postman

## Authorization

1. Click tab authorization on postman
2. Choose Type "Bearer Token" on the left
3. Insert token on the right

## User API

### Register User

* URL: http://localhost:4000/api/v1/user/register
* Method: POST
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
* Method: POST
* Request Body:

```
{
  "email": "admGuest@gmail.com",
  "password": "rahasia"   
}
```
