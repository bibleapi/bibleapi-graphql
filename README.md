# Bible API GraphQL - WIP

### Install

```
npm install
```

### Run

```
npm start
```

### Develop

```
npm run dev
```

### Use

Request [http://localhost:3333/graphql](http://localhost:3333/graphql)

```
{
  passage(reference: "Gen 1:1") {
    verse
  }
}
```

Response

```
{
  "data": {
    "passage": {
      "verse": "In the beginning God created the heaven and the earth."
    }
  }
}
```

### Database

Start MongoDB
```
mongod --dbpath ./data/db
```

Import data

```
mongoimport --db bibleapi --collection bible --type json --file /seed/asv.json
```