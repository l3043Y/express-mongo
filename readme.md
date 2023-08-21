# Cloud Computing Assignment
## Assignment1: CREATE API using NodeJS + postman for get/post/put/delete
### GET METHOD
```bash
curl --location 'localhost:3000/http-method' \
--data ''
```
![image](https://github.com/l3043Y/express-mongo/assets/20104217/2f0f7be5-880b-4301-affe-2becd70fb94a)

### PUT METHOD
```bash
curl --location --request PUT 'localhost:3000/http-method' \
--data ''
```
![image](https://github.com/l3043Y/express-mongo/assets/20104217/9fbaaf50-101f-4e4a-8d70-b34fd19bbf2e)


### POST METHOD
```bash
curl --location --request POST 'localhost:3000/http-method' \
--data ''
```
![image](https://github.com/l3043Y/express-mongo/assets/20104217/494c9f88-f84d-469c-b144-ecaf8720d8fd)


### DELETE METHOD
```bash
curl --location --request DELETE 'localhost:3000/http-method' \
--data ''
```
![image](https://github.com/l3043Y/express-mongo/assets/20104217/0d115a3d-79da-44cf-9507-065f0d8572e4)

## Assignment2: Login API
### Match
```bash
curl --location 'localhost:3000/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "emailid": "sok.heng@smart.com.kh",
    "password": "sok.heng.sok.sabay"
}'
```
![image](https://github.com/l3043Y/express-mongo/assets/20104217/7404fe2d-f402-4e08-9b3f-7607f7709ecc)

### Not Match
```bash
curl --location 'localhost:3000/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "emailid": "sok.heng@smart.com.kh",
    "password": "sok.heng.sok.sabay1"
}'
```
![image](https://github.com/l3043Y/express-mongo/assets/20104217/4c789a94-23ad-41f4-85af-d82acbcfe8c3)

## Assignment3: Docker Assignment create 4 API:
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
![image](https://github.com/l3043Y/express-mongo/assets/20104217/d4c29985-a3fa-4ad4-b9fa-165fb9e35780)
