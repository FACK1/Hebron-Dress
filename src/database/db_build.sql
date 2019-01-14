BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
    mobile  VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS dress CASCADE;

CREATE TABLE IF NOT EXISTS dress (
    id SERIAL PRIMARY KEY,
    img VARCHAR(500)NOT NULL,
    category VARCHAR(200)NOT NULL,
    size VARCHAR(20)NOT NULL,
    color VARCHAR(150)NOT NULL,
    for_rent Boolean NOT NULL,
    for_sale Boolean NOT NULL,
    available Boolean NOT NULL,
    price INTEGER NOT NULL,
    user_id INT REFERENCES users

);
INSERT INTO users (name, email, password, mobile) VALUES
( 'Razan',
  'aaa@hd.com',
  '0000',
  '0596245621'
),
(
  'Amin',
  'amin@hd.com',
  '1111',
  '0596267842'
);
INSERT INTO dress (img, category, size, color , for_rent, for_sale, available, price, user_id) VALUES
( 'https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2017/12/28/goods-img/1541979940494932251.jpg',
  'Party',
  'Large',
  'Red',
   TRUE,
   FALSE,
   TRUE,
   30,
   1
),(
  'http://assets.myntassets.com/assets/images/2172537/2017/10/12/11507798544238-naughty-ninos-Girls-Magenta-Solid-Fit-and-Flare-Dress-4091507798544135-1.jpg',
    'Party',
    'Small',
    'Pink',
     FALSE,
     TRUE,
     FALSE,
     50,
     2
);
COMMIT;
