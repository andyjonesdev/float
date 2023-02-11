# float

Welcome to my project, float! float is a loose clone of SoundCloud with a theme of dreamy, psychedelic, or groovy songs that can help you relax.

This is a solo project that was completed in a 2 week sprint and features:

- full CRUD (Create, Read, Update, Delete) functionality for Songs and Comments
- Song playback via a react-h5-audio-player instance
- User authentication and authorization
- WTForm validations for supplied form info

## Live Site
https://float-away.onrender.com/

## Technologies Used
- React
- Redux
- Redux Toolkit
- Flask
- SQLAlchemy
- Postgres
- WTForms
- Styled Components
- react-h5-audio-player

## Site Views
### Splash
![alt text](https://media.discordapp.net/attachments/858135958729392152/938857196589043742/float-homepage.PNG?width=1001&height=584)

### Song Page
![alt text](https://media.discordapp.net/attachments/858135958729392152/938857259033829476/float-songpage.PNG?width=925&height=584)

### All Songs
![alt text](https://media.discordapp.net/attachments/858135958729392152/938859516215296020/unknown.png?width=798&height=584)

### Auth Modals
![alt text](https://media.discordapp.net/attachments/858135958729392152/938859284651966474/unknown.png?width=509&height=584)
![alt text](https://media.discordapp.net/attachments/858135958729392152/938859415065473054/unknown.png)

## How to Clone and Run float Locally
1. Clone this repository by running `git clone https://github.com/andyrose507/float`
2. In the directory where you cloned the repository, run `pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt` to install backend dependencies
3. Make a local database using a program such as PostgreSQL
4. Make a `.env` file by copying the contents of `.env.example`, replacing `SECRET_KEY` with a secure key and `DATABASE_URL` with the URL to your database
5. Enter your pipenv shell by running `pipenv shell`, OR preface each of the following commands with `pipenv run`
6. Migrate the database by running `flask db upgrade` at the project root
7. Seed the database by running `flask seed all`
8. Start the backend server by running `flask run`
9. In another terminal, navigate to the `react-app` directory and run  `npm install`
10. Start the frontend server by running `npm start` 
