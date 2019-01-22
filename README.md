# Hebron Dress
### About:
   Our website allows the user to buy or rent dresses.

### Naming Confing: 
 - Variables and files: camelCase
 - Eslint: airbnb-base
 - Async: Promises 

### Users journeys: 

*As a buyer...*
 > I can see the available dresses

 > I can search for an dress
   
 > I can see all the details of the chosen dress


*As a seller...*

 > I can see the available dresses

 > I can search for an dress
   
 > I can see all the details of the selected dress
 
 > I should create the account (Registration) and Login.
 
 > I can add the dresses
 
 
# Website Link:[HebronDress]()

# Database Schema

![db_schema](https://user-images.githubusercontent.com/26909309/51103183-7e48d800-17ea-11e9-9403-26ee6b60b93f.jpg)


# Files Structure:
  - public
  - css
      - style.css
      - login.css
      - signup.css
      - product.css
      - oneDress.css
      - reset.css
  - img
 
    
  - src 
    - server.js
    - app.js
    - controllers
      - home.js
      - search.js
      - error.js
      - signup.js
      - login.js
      - add.js
      - index.js
      - logout.js
      - product.js
      - oneDress.js
    - views
      - helpers
        - helper.hbs
      - layouts
        - main.hbs
      - partials
        - header.hbs
      - home.hbs
      - signup.hbs
      - login.hbs
      - error.hbs
      - profile.hbs
      - add.hbs
      - dress.hbs
      - product.hbs
      - dress.hbs
      - error_404.hbs
    - database
     - models
        - dress.js
        - user.js
        - sequalize.js
        - index.js
    - validation
        - cookieValidator.js
        - validate.js
        - server-side.js
        
    - tests
      - test.js
 - .gitignore
 - package.json
 
  ### How to run our site on your machine?

1- Clone this repo (git@github.com:FACK1/HebronDress.git)

2- Open your command line.

3- Put in terminal : **npm install**.
 
4- Then create database in terminal `CREATE DATABASE  ;` .

5- Then  create user `CREATE USER  with password '';` .

6- Then  put command `GRANT ALL PRIVILEGES ON DATABASE to ;` will grant our had  with all priviliges and rights to use and access the database.
 
7- Go the root directory and create a file **"config.env"**, and put in it `DATABASE_URL=postgres://lvohshdlpneeiv:0fd702acbd1e1870117a5afe6abb915ebc3d3c5e6f25b104a7338f0e7f3e9dbb@ec2-54-225-227-125.compute-1.amazonaws.com:5432/d1tmpt2836jsce` and `SECRET=kmdcddcesdsdsgfvsgswbssvbhs`.

8- Then put in terminal : **node src/database/** to build the database.

9- Then put in terminal : **npm run dev** to run the server.

10- Open your browser and put in terminal: **localhost:3000**.


# Team Member:
- [Shaima' Azmi](https://github.com/shaima96)
- [Safa Amro](https://github.com/safaaamro)
- [Razan Tayyem](https://github.com/RazanTayyem)
- [Amin Talahma](https://github.com/AminTalahma)

