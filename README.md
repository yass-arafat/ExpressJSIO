# ExpressJSIO
## Used Technology
* Express JS
* NodeJS and NPM
* MongoDB Database
* Mongoose ORM
* Pug Template Engine
* Bower Package Manager
* Bootstrap
* jQuery and Ajax
## Details
**ExpressJS**
 1) What is Express.js?
 
    Ans. A backend framework of Node.js. It has lot's of built in configuration and it provides the very simple way to connect any middleware to your project.
    
 2) What is the purpose of it with Node.js?
 
    Ans. In ExpressJS we don't have to repeat same code over and over again. Node.js is a low-level I/O mechanism which has an HTTP module. If we just use an HTTP module, a lot of work like parsing the payload, cookies, storing sessions(in memory or in Redis), selecting the right route pattern based on regular expressions will have to be re-implemented. With Express.js we will get the built in library/methods to do this with simplicity.
    
 3) Does Express a MVC Framework
 
    Ans. Express.js is not an model-view-controller framework by itself. You need to bring your own object-relational mapping libraries such as Mongoose for MongoDB, Sequelize for SQL databases in your project.
    
 4) Why do we actually need Express.js? How it is useful for us to use with Node.js?
 
    Ans. Express adds dead simple routing and support for Connect middleware, allowing many extensions and useful features. For example,
    * Want sessions? It's there
    * Want POST body / query string parsing? It's there
    * Want easy templating through jade, mustache, ejs, etc? It's there
    * Want graceful error handling that won't cause the entire server to crash?
    
**MongoDB**

- MongoDB is a popular open-source Schemaless **document-oriented database** where MySQL is **Relational Database MS**
- It follows NOSQL(no structured query language) procedures means unstructred way of documenting data.
- documents are created and stored in BSON files, Binary JSON (JavaScript Object Notation) format, so all JS types of data are supported.
- the top benefits offered by MongoDB is the use of dynamic schemas that eliminates the need to pre-define the structure, like fields or value types. For more you can read this https://hackernoon.com/mongodb-vs-mysql-comparison-which-database-is-better-e714b699c38b 
 
 ONE THING IS When calling MongoDB schemaless, it really refers to the fact that the database itself requires no schema and no schema migrations either. That does not mean that your data is always unstructured - in most cases you want your data to be structured, and by nature, it usually is.
