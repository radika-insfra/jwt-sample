## API Reference

BaseURL: **https://nsbm.radikadilanka.com:5000**

#### Get all Categories

```http
  GET /categories/gat-all
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `auth`    | `string` | **Required**. Your API key |
| `api_key` | `string` | **Required**. Your API key |

#### Login

```http
  POST /user/login
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `email`    | `string` | **Required**. email of the user    |
| `password` | `string` | **Required**. password of the user |

**Response**

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjgzNDc0NzYwfQ.g6A5CVQd2QKoDeMyR71MYNwq31z_ktZ4pmI6YXoR4qI"
}
```
