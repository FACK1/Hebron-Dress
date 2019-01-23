# Hebron Dress

[HebronDress](https://hebrondresses.herokuapp.com/)
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

![db_schema](https://user-images.githubusercontent.com/26909309/51532112-f432ec00-1e47-11e9-843c-c2fdb5a81237.jpg)

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
        - server-side.js
        
    - tests
       - test.js
 - .gitignore
 - package.json
 
  ### How to run our site on your machine?

-  Clone this repo (git@github.com:FACK1/HebronDress.git)

-   Open your command line.

-   Put in terminal : **npm install**.
 
-   Then put in terminal : **npm run dev** to run the server.

-   Open your browser and put in terminal: **localhost:3000**.


# Team Member:
- [Shaima' Azmi](https://github.com/shaima96)
- [Safa Amro](https://github.com/safaaamro)
- [Razan Tayyem](https://github.com/RazanTayyem)
- [Amin Talahma](https://github.com/AminTalahma)

