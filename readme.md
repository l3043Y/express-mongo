### Add User
```bash
curl --location 'localhost:3000/add' \
--header 'Content-Type: application/json' \
--data-raw '{
    "empid": 1999,
    "name": "Sok Heng",
    "emailid": "sok.heng@smart.com.kh",
    "password": "sok.heng.sok.sabay"
}'
```
![image](https://github.com/l3043Y/express-mongo/assets/20104217/7b792dc6-2198-4024-a8b4-6a693e137431)

### Get User
```bash
curl --location 'localhost:3000/view' \
--data ''
```
![image](https://github.com/l3043Y/express-mongo/assets/20104217/61ccd74c-f8c0-4f72-af1e-4862931c4e22)

### Login
```bash
curl --location 'localhost:3000/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "emailid": "sok.heng@smart.com.kh",
    "password": "sok.heng.sok.sabay"
}'
```
![image](https://github.com/l3043Y/express-mongo/assets/20104217/7404fe2d-f402-4e08-9b3f-7607f7709ecc)

### Search
```bash
curl --location --request GET 'localhost:3000/search/1999' \
--header 'Content-Type: application/json' \
--data-raw '{
    "empid": 1999,
    "name": "Sok Heng",
    "emailid": "sok.heng@smart.com.kh",
    "password": "sok.heng.sok.sabay"
}'
```
![image](https://github.com/l3043Y/express-mongo/assets/20104217/fc21ad31-9f1b-4128-8d47-e6eaaba770e4)
