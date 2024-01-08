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

## Party (partai) API

### Get all parties
`No Authorization`

* URL: http://localhost:4000/api/v1/parties
* Method: `GET`
* Request Body:

```
[
    {
        "id": 1,
        "name": "GETO UHUY",
        "image": "17011.png",
        "chairman": "Suguru Geto",
        "vision_mission": "In publishing and graphic design",
        "address": "Jalan Veteran, Jakarta Pusat. Map: Klik Disini. HTM: Free. Buka Tutup: 09.00 – 16.00 WIB",
        "candidates": [
            {
                "id": 1,
                "name": "Mimiko Hasaba",
                "image": "LOGO-1704700723367.png",
                "number": 1,
                "vision_mission": "MENGHENTIKAN INVASI NEGARA API"
            }
        ]
    },
    {
        "id": 2,
        "name": "KAMOGAWA GYM",
        "image": "17011.png",
        "chairman": "Genji Kamogawa",
        "vision_mission": "In publishing and graphic design",
        "address": "Jalan Veteran, Jakarta Pusat. Map: Klik Disini. HTM: Free. Buka Tutup: 09.00 – 16.00 WIB",
        "candidates": [
            {
                "id": 2,
                "name": "IPPO",
                "image": "LOGO-1704702416331.png",
                "number": 2,
                "vision_mission": "MENINJU SEMUA ORG YG ADA"
            }
        ]
    }
]
```
`Candidate data will be shown after the admin creates a candidate(paslon)`

### Get detail party
`No Authorization`

* URL: http://localhost:4000/api/v1/party/:id
* Method: `GET`
* Request Body:

```
{
    "id": 1,
    "name": "GETO UHUY",
    "image": "412520687_829427478869516_382939006133828220_n-1704695129411.png",
    "chairman": "Suguru Geto",
    "vision_mission": "In publishing and graphic design",
    "address": "Jalan Veteran, Jakarta Pusat",
    "candidates": [
        {
            "id": 1,
            "name": "Mimiko Hasaba",
            "image": "LOGO-1704700723367.png",
            "number": 1,
            "vision_mission": "MENGHENTIKAN INVASI NEGARA API"
        }
    ]
}
```

### Create new party
`Authorization`

* URL: http://localhost:4000/api/v1/party
* Method: `POST`
* Request Body:

```
{
  "name": "ASTA",
  "image": "1704718751443.png",
  "number": 3,
  "vision_mission": "MENGHANCURKAN NEGARA TANAH",
  "address": "KERAJAAN SIHIR"
}
```
