# SocialMedia_Backend_APIs
This is Social Media Backend APIs. Using this APIs you can:
- Register, Login and can also perform CRUD Operation on Users.
- Other than that you can perform CRUD Operation on Posts

***

1. **REGISTER A USER**: POST: http://localhost:8800/api/auth/register
2. **LOGIN**          : POST: http://localhost:8800/api/auth/login

***

1. **CREATE POST**:     POST: http://localhost:8800/api/posts
`{
  "userId": Id of a User
}`

2. **UPDATE POST**:     PUT : http://localhost:8800/api/posts/postID
`{
  "userId": Id of a User
}`

3. **DELETE POST**:     DELETE : http://localhost:8800/api/posts/postID
`{
  "userId": Id of a User
}`

4. **LIKE / DISLIKE POST**: PUT: http://localhost:8800/api/posts/----POST ID-----/like
`{
    "userId": MY_ID
}`

5. **GET POST**:        GET : http://localhost:8800/api/posts/postID
***

1. **GET USER**:    GET: http://localhost:8800/api/users/userID

2. **UPDATE USER**: PUT: http://localhost:8800/api/users/userID
`{
  "userId": userID,
  "name": ...,
  "password": ...
}`

3. **DELETE USER**: DELETE: http://localhost:8800/api/users/userID 
`{
  "userId": userID
}`

5. **FOLLOW USER**: PUT: http://localhost:8800/api/users/....USER-ID OF A PERSON WHO I WANT TO FOLLOW or Second Person.../follow

`{
  "userID": myId/ first person
}`

7. **FOLLOW USER**: PUT: http://localhost:8800/api/users/....USER-ID OF A PERSON WHO I WANT TO FOLLOW or Second Person.../unfollow
   
  `{
    "userID": myId/ first person
  }`











