# Introduction

I have built a movie database website using several technologies including React, TypeScript, GraphQL, Apollo, Node.js, PostgreSQL, PrismaORM, Redis, Next.js, and TypeGraphQL. This website allows users to create, view, update and delete movies, as well as rate them. To ensure smooth user experience and prevent potential security issues, Redis is used to store user sessions and limit the rate of requests made to the website (rate limiting). 

## Technologies
- React: I decided to use React, over PHP, as the front-end library for my website to build the user interface. Its component based architecture along with the virtual DOM allows for serving dynamic and interactive content to the user.
- TypeScript: This transcompiles to JavaScript on build but allows static typing in development. This means better code readability, self-documenting code, and catches potential errors before compile time.
- GraphQL: I have used GraphQL as the API query language as it allows for flexible data retrieval through requesting only the specific data the client needs which reduces over-fetching that that occur with a RESTful API.
- Apollo: The apollo framework ha been used to help implement GraphQL both on the front-end and back-end. Apollo Client helps with data management on the front-end e.g. caching and state management. Whereas, Apollo Server configures the GraphQL server on the back-end.
- Node.js: This is a JavaScript runtime environment for the server-side code.
- PostgreSQL: I chose PostgreSQL for the relational database as it supports ENUM types and higher performance than other relational database management systems.
- PrismaORM: Prisma is used to map objects to relational queries in order to interact with the database. This means it will generate the most efficient SQL queries for the request while solving issues like the GraphQL n+1 problem. However, to show I also can use SQL I have implemented some raw SQL queries too.
- Redis: This is an in-memory database used for storing user sessions and rate limiting requests to the server based on IP.
- Next.js: This is a front-end framework built on top of the React library that allows me to choose which pages will be either server-side generated or statically served to the user. This enhances and optimises SEO which allows for better indexing on search engines e.g. Google.
- TypeGraphQL: I used TypeGraphQL in order to add types to my schemas and resolvers using TypeScript decorators. This means that my api is type-safe and easier to interact with.

To see the running application:
http://82.163.245.110:3000/
http://82.163.245.110:4000/graphql

echo "Private IP address:" $(ip addr show $(ip route | awk '/default/ {print $5}') | awk '/inet / {print $2}' | cut -d/ -f1)

# Login Details
These are some important login details.

## User
- user@user.com
- passwordforuser

## Admin
- admin@admin.com
- passwordforadmin

# Important URL's 
http://82.163.245.110:3000/
http://82.163.245.110:3000/home
http://82.163.245.110:3000/preferences
http://82.163.245.110:3000/settings

# References

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [GraphQL](https://graphql.org)
- [Apollo](https://www.apollographql.com)
- [Node.js](https://nodejs.org)
- [PostgreSQL](https://www.postgresql.org)
- [Prisma ORM](https://www.prisma.io)
- [Redis](https://redis.io)
- [Next.js](https://nextjs.org)
- [TypeGraphQL](https://typegraphql.com)

