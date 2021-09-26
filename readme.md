## mario_crud

> This API has been made using Node.js/express as backend and MongoDB as the database.

## Usage

    1. Clone the repository to your local maching by running the following command:

    	git clone <repoID>

    2. Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

    3. Open CMD/terminal in the folder and type the following command:

    	i. npm install

    4. Now to run the server type the following command:

    	npm run dev

## Database Seeder

To seed the database with mario with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## There are 5 end points in the api:

    1:GET http://localhost:3000/mario
    Response with an array of Mario characters.

    2:GET http://localhost:3000/mario/:id

    Response with a Mario character with given id

    Response with status code 400 and Error message({message: error.message}) if id does not match

    3:POST http://localhost:3000/mario

    Save the given Mario character in the database. Response with status code 201 and newly saved Mario character

    Response with status code 400 and Error message({message: 'either name or weight is missing'}) if character's name or weight is misssing

    4:PATCH http://localhost:3000/mario/:id

    Response with a Mario character of given id after updating as per suggested changes in database

    Response with status code 400 and Error message({message: error.message}) if id does not match or invalid suggested changes

    5:DELETE http://localhost:3000/mario/:id

    Delete the Mario character of given id from the database. Response with status code 200 and message({message: 'character deleted'})

    Response with status code 400 and Error message({message: error.message}) if id does not match

### Documentation:

https://documenter.getpostman.com/view/14909689/UUxxhUK6
