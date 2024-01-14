# How To Use Pemilu Backend Using Postman

## Authorization

1. Click tab authorization on postman
2. Choose Type "Bearer Token" on the left
3. Insert token on the right

## User API

### Register User

- URL: http://localhost:4000/api/v1/user/register
- Method: `POST`
- Request Body:

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

- URL: http://localhost:4000/api/v1/user/login
- Method: `POST`
- Request Body:

```
{
  "email": "admGuest@gmail.com",
  "password": "rahasia"
}
```

### Get detail User

`Authorization`

- URL: http://localhost:4000/api/v1/user/:id
- Method: `GET`
- Request Body:

```
{
  "id": 2,
    "fullName": "admGuest",
    "email": "admGuest@gmail.com",
    "gender": "laki laki",
    "userName": "admGuest",
    "article": [
        {
            "id": 16,
            "title": "ARTIKEL BARU 1",
            "image": "412520687_829427478869516_382939006133828220_n-1705136482473.png",
            "date": "2023-07-01T00:00:00.000Z",
            "description": "Lorem ipsum dolor amet wak waw"
        }
    ],
    "vote": [
        {
            "id": 2
        }
    ]
}
```

### Update User

`Authorization`

- URL: http://localhost:4000/api/v1/user/:id
- Method: `PUT`
- Request Body:

```
{
  "fullName": "admUpdate",
  "password": "rahasia",
  "address": "gang masjid",
  "gender": "laki laki"
}
```

### Update User

`Authorization`

- URL: http://localhost:4000/api/v1/user/:id
- Method: `DELETE`
- Request Body:

```
{
  "message": "User has been removed"
}
```

## Article API

### Get All Articles

`No Authorization`

- URL: http://localhost:4000/api/v1/articles
- Method: `GET`
- Request Body:

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

### Create new Article

`Authorization`

- URL: http://localhost:4000/api/v1/article
- Method: `POST`
- Request Body:

```
{
  "title": "admGuest@gmail.com",
  "image": "rahasia",
  "date": 2023-07-01,
  "description": "Lorem ipsum dolor amet wak waw"
}
```

`Author and userId obtained from isLogin trough Authorization`

### Get detail Article

`Authorization`

- URL: http://localhost:4000/api/v1/article/:id
- Method: `GET`
- Request Body:

```
{
   "id": 16,
    "title": "ARTIKEL BARU 1",
    "date": "2023-07-01T00:00:00.000Z",
    "author": "admGuest",
    "description": "Lorem ipsum dolor amet wak waw",
    "users": {
        "id": 2,
        "fullName": "admGuest"
    }
}
```

### Update Article

`Authorization`

- URL: http://localhost:4000/api/v1/article/:id
- Method: `PUT`
- Request Body:

```
{
    "title": "ARTIKEL UPDATE",
    "image": "jpg.jpg",
    "date": "2023-07-01T00:00:00.000Z",
    "description": "Lorem ipsum dolor amet wak waw",
}
```

### Delete Article

`Authorization`

- URL: http://localhost:4000/api/v1/article/:id
- Method: `DELETE`
- Request Body:

```
{
    message: "Article has been removed"
}
```

## Party (partai) API

### Get all Parties

`No Authorization`

- URL: http://localhost:4000/api/v1/parties
- Method: `GET`
- Request Body:

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

### Create new Party

`Authorization`

- URL: http://localhost:4000/api/v1/party
- Method: `POST`
- Request Body:

```
{
  "name": "ASTA",
  "image": "1704718751443.png",
  "number": 3,
  "vision_mission": "MENGHANCURKAN NEGARA TANAH",
  "address": "KERAJAAN SIHIR"
}
```

### Get detail Party

`No Authorization`

- URL: http://localhost:4000/api/v1/party/:id
- Method: `GET`
- Request Body:

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

### Update Party

`Authorization`

- URL: http://localhost:4000/api/v1/party/:id
- Method: `PUT`
- Request Body:

```
{
  "name": "Party UPDATE",
  "image": "1704718751443.png",
  "chairman": "BULALA",
  "vision_mission": "MENGHANCURKAN NEGARA TANAH",
  "address": "KERAJAAN SIHIR"
}
```

### Delete Party

`Authorization`

- URL: http://localhost:4000/api/v1/party/:id
- Method: `DELETE`
- Request Body:

```
{
  message: "Party has been removed"
}
```

## Candidate(paslon) API

### Get all Candidates

`No Authorization`

- URL: http://localhost:4000/api/v1/candidates
- Method: `GET`
- Request Body:

```
[
    {
        "candidate_id": 1,
        "candidate_name": "Mimiko Hasaba",
        "candidate_image": "FIFA LOGO-1704700723367.png",
        "candidate_vision_mission": "MENGHENTIKAN INVASI NEGARA API",
        "partyid": 1,
        "partyname": "GETO UHUY"
    },
    {
        "candidate_id": 2,
        "candidate_name": "IPPO",
        "candidate_image": "FIFA LOGO-1704702416331.png",
        "candidate_vision_mission": "MENINJU SEMUA ORG YG ADA",
        "partyid": 2,
        "partyname": "KAMOGAWA GYM"
    }
]
```

### Create new Candidate

`Authorization`

- URL: http://localhost:4000/api/v1/candidate
- Method: `POST`
- Request Body:

```
   {
        "name": "IPPO",
        "image": "FIFA LOGO-1704702416331.png",
        "number": 3,
        "vision_mission": "MENINJU SEMUA ORG YG ADA",
        "partyid": 2
    }
```

`Make sure to send the partyId using the id from the party to associate the candidate with the correct party`

### Get detail Candidate

`No Authorization`

- URL: http://localhost:4000/api/v1/candidate/:id
- Method: `GET`
- Request Body:

```
   {
    "id": 1,
    "name": "AANG",
    "image": "FIFA LOGO-1704700723367.png",
    "vision_mission": "MENGHENTIKAN INVASI NEGARA API",
    "party": {
        "id": 1,
        "name": "GETO UHUY",
        "vision_mission": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a webpage or publication,"
        }
    }
```

### Update Candidate

`Authorization`

- URL: http://localhost:4000/api/v1/candidate/:id
- Method: `PUT`
- Request Body:

```
   {
        "name": "PASLON UPDATE",
        "image": "FIFA LOGO-1704702416331.png",
        "number": 3,
        "vision_mission": "MENINJU SEMUA ORG YG ADA",
        "partyid": 2
    }
```

### Delete Candidate

`Authorization`

- URL: http://localhost:4000/api/v1/candidate/:id
- Method: `DELETE`
- Request Body:

```
   {
        message: "Candidate has been removed"
    }
```

## Voter API

### Get all voters

`Authorization`

- URL: http://localhost:4000/api/v1/voters
- Method: `GET`
- Request Body:

```
[
    {
        "userid": 1,
        "voter_name": "admazra",
        "voter_address": "gang masjid",
        "voter_gender": "male",
        "candidateid": 1,
        "candidatename": "Mimiko Hasaba"
    },
    {
        "userid": 2,
        "voter_name": "admGuest",
        "voter_address": "namek",
        "voter_gender": "male",
        "candidateid": 2,
        "candidatename": "IPPO"
    }
]
```

### Create new voter

`Authorization`

- URL: http://localhost:4000/api/v1/voter
- Method: `POST`
- Request Body:

```
[
    {
        "candidateId": 1,
        "voter_name": "admazra",
        "voter_address": "gang masjid",
        "voter_gender": "male",
        "candidateid": 1,
        "candidatename": "Mimiko Hasaba"
    }
]
```

`The voter data, including voter name, voter address, etc., is retrieved from the user data obtained through user login authorization`
