# library management system
This is library management API Backend for the mangement of users and the books

# Routes and the endpoints



# /users
GET: get all the list of users in the system
POST: Create/Register a new user


## /users/{user-id}
GET user by their id
PUT ubdating user by their id
DELETE deleting user by their id( check if the user still has an issued book ) && (is there any fine/penalty to be collected)


## /users/subscription-details/{user-id}
GET geta user subscription details by their id
    >> date of subscription
    >>valid till?
    >>Fine if any

# /books
GET get all the books in the system
POST create/register a new book to the system


# /books {book-id}
GET get a book by its id
PUT update a book by its id
DELETE delete a book by its id

# /books/issued
GET get all issued books

# /books/issued/withfine
GET get all issued books with their fine amount


# /subscription types
    >>Basic(3months)
    >>Standard(6months)
    >>PRemium(12months)

>> if a user missed the renewal date then user should be collected with $100
>> if a user misses the subscription, then the user excepted to pay $100
>> if a user misses both renewal and subscription then the collected amount should be $200


>>Commands
    npm init
    npm i express
    npm i nodemon --save-dev
    npm run dev

    To restore node_module and package-lock.json >> npm i/npm install