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

Request [http://localhost:3000/graphql](http://localhost:3000/graphql)

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