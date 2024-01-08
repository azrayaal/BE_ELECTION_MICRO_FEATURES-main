# How To Use Pemilu Backend Using Postman

## Authorization

1. Click tab authorization on postman
2. Choose Type "Bearer Token" on the left
3. Insert token on the right

## User API

### Register User

* URL: http://localhost:5000/api/v1/register
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
