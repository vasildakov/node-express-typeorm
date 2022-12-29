# Node, Express, TypeScript and TypeORM 


TypeORM Cli

```
$ sudo npm i -g typeorm
```


```
$ typeorm init
```

```
$ nodemon --watch src src/index.ts
```


## TypeOrm Migrations


Generate a migration

```sh
$ npx ts-node ./node_modules/.bin/typeorm migration:generate ./src/migration -d ./src/data-source.ts

// Migration /home/vasildakov/Dev/node/node-express-typeorm/src/1672313375711-migration.ts has been generated successfully.

```

Run migrations

```
$ npx ts-node ./node_modules/.bin/typeorm migration:run -d ./src/data-source.ts 

query: SELECT VERSION() AS `version`
query: SELECT * FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA` = 'type_orm_test' AND `TABLE_NAME` = 'migrations'
query: SELECT * FROM `type_orm_test`.`migrations` `migrations` ORDER BY `id` DESC
0 migrations are already loaded in the database.
1 migrations were found in the source code.
1 migrations are new migrations must be executed.
query: START TRANSACTION
query: ALTER TABLE `user` ADD `email` varchar(255) NOT NULL
query: INSERT INTO `type_orm_test`.`migrations`(`timestamp`, `name`) VALUES (?, ?) -- PARAMETERS: [1672313375711,"migration1672313375711"]
Migration migration1672313375711 has been  executed successfully.
query: COMMIT
```


Scripts

```javascript
   "scripts": {
      "build": "tsc",
      "dev": "NODE_PATH=src nodemon --watch src src/index.ts",
      "typeorm": "typeorm-ts-node-commonjs",
      "test": "echo \"Error: no test specified\" && exit 1",
      "lint": "eslint \"src/**/*.{js,js,ts}\" --fix && tsc --noEmit",
      "orm:schema:sync": "ts-node ./node_modules/.bin/typeorm schema:sync -d src/data-source.ts",
      "orm:schema:drop": "ts-node ./node_modules/.bin/typeorm schema:drop -d src/data-source.ts",
      "orm:schema:log": "ts-node ./node_modules/.bin/typeorm schema:log -d src/data-source.ts"
   },
   
```