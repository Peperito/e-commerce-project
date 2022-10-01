# Creating a simple Full-Stack app

## E-commerce platform

### POSTGRESQL database 

Following this DB schema:

![image](https://user-images.githubusercontent.com/32515747/182545523-274e6173-0581-4c8d-9ff6-3478ec060810.png)

### Redis database 

The goal of this project is also to implement the concepts I am currently learning on Redis University
In order to have the products load as fast as possible, Redis will capture and store all the research results from the user.


### Triggers and Indexes:
Auto Update function and TRIGGER On the database to get a new timestamp on the modified_at columns for users after each PUT
TO be done:
- Auto-update modified_at for the rest of the schema


### Express Server:

- Connection to DB established
- CRUD functionalities for users
- Took care of the sessions and cookies with express sessions
- Built registration / login / logout with Bcrypt

To be done:
- Build product endpoints

### React Frontend

Done: Welcome Page, Login/LogOut

This is the current homepage:

#### For Desktop:

![image](https://user-images.githubusercontent.com/32515747/184383824-6cbaba44-72e3-471e-af40-6c272022b00c.png)


To continue: Profile Page, Account Creation

To be done: 
- Create Product search pages
- Create individual Product pages
- Create Cart
