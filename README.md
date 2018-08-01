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
* body-parser
* express-validatior
* express-session
* connect-flash
* bcryptJS
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
- the top benefits offered by MongoDB is the use of **dynamic schemas** that eliminates the need to pre-define the structure, like fields or value types. Like in a **user** collection, if there is an object like ob1{id: 1, name:'rahat'}, you can create another object like ob2{email: 'email_address'}. For more you can read this https://hackernoon.com/mongodb-vs-mysql-comparison-which-database-is-better-e714b699c38b 
 
 ONE THING IS When calling MongoDB schemaless, it really refers to the fact that the database itself requires no schema and no schema migrations either. That does not mean that your data is always unstructured - in most cases you want your data to be structured, and by nature, it usually is.
 
 **Mongoose**
- Mongoose is an ORM of MongoDB. It has brought to write code comfortably. It's just a model. Models are only useful when you are scaling into a big application with a large API that needs to be broken up into a MVC system(mongoose being your models). You can work without it also.
- Mongoose  has some built in validation methods and neat features in order to make sure your schema is consistent when inserting/updating/finding documents from collections.

**PUG**

- PUG is a template engine like EJS which allows us to inject data and produces HTML
- Benifits over EJS is it uses less lines and it looks more readable and you don't feel like you are writing html but javascript.
- Disadvantage is here's white space matters. A simple mistake in formatting can cause a big trouble

**Bower**

- Bower is a front end package manager. To manage(installing, maintaining etc) CSS frameworks like Bootstrap, libraries like jQuery, jQuery plugins, or JavaScript frameworks like Angular we need bower.
- bower.json file contains all framework that you install in your project.
- By .bowerrc file you can change the location of bower_components folder where you want it. bower_components folder contains all installed framework inside it.

**Bootstrap**

- Bootstrap is an open-source JavaScript framework developed by the team at Twitter.
- It is a combination of HTML, CSS, and JavaScript code.
- To make responsive projects you need bootstrap. It caontains lot of built in library to make you websites interactive and responsive.
- E.g. To use bootstrap you have to include such For CSS **bootstrap.min.css**, For Jquery **jquery-3.3.1.slim.min.js** For JS **bootstrap.min.js** in to your html page.

**JQuery**

- jQuery is a fast and concise library of JavaScript.
- To traverse HTML document, To handle event of html page and to interact with ajax you need jQuery.
- The purpose of jQuery is to make it much easier to use JavaScript on website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that we can revoke with a single line of code.

**AJAX**

- Asynchronus JavaScript and XML
- To send data between web pages through browser and server without reloading the page we need ajax calls.
- when we start typing something in Google, JavaScript detects each 'button press' event and it makes AJAX calls after each such event to a back-end file which in-turn sends back the results.


**Salt**

- To understand bcrypt we first need to know about salt encryption as bcrypt uses salt.
- salt is some value that is concatanated to your password/hashed password to make difficult for attackers in brute force attacking.
- value could be any dictionary value or if you want to make it more difficult you can use random salt value in your system for each user.
- Two very nice article i found so far about salt
https://gooroo.io/GoorooTHINK/Article/13023/The-difference-between-encryption-hashing-and-salting/2085#.W2E8e9Iza00
and
https://crypto.stackexchange.com/questions/1776/can-you-help-me-understand-what-a-cryptographic-salt-is 

**bcryptJS**

- bcrypt is an encryption system that automatically salts the data that encrypts.
- It adds extra text or numbers as salt to any data put in and takes it out when the password is called. It can be made to go slower which helps against brute force attacks.
- bryptJS is the model of using bcrypt encryption through JavaScript language.

**body-parser**

- body-parser extract the entire body portion of an incoming request stream and exposes it on  **req.body**
- To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
- This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.

**connect-flash**

- connect flash is the middleware to show flash message in web pages. e.g. After sign up completed to show message like 'You are registerd' you need this middleware.
