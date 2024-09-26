import React from 'react';

function HomePage() {
    return (
        <>
            <h2>Web Development Portfolio Home Page</h2>

            <article>
                <h3>My Career Goals</h3>

                <p>Currently, I am working toward a Bachelor's Degree 
                    in Biological Data Sciences, with minors in Statistics and 
                    Computer Sciences at Oregon State University. After I graduate, I hope to get a job 
                    in the technology industry as a data scientist or software 
                    engineer. Once I gain some experience, I hope to be sponsored 
                    to attend graduate school to further my education and expand 
                    my opportunities in my field.
                </p>

                <p>Below is a list of technologies used on this site.</p>
                <ul>
                    <li><strong>Modules in JavaScript</strong>
                    <p>
                    Modules in JavaScript (or MJS) are used in order to make certain 
                    classes or functions available for use outside its original module, 
                    simultaneously hiding the implementation details of those classes 
                    or functions inside the module. This website imports features from 
                    a module using the import statement along with the name of the features 
                    and the URL of the file containing the module. 
                    </p>
                    </li>
                    <li><strong>Route Handlers and HTTP methods</strong>
                    <p>
                        The backend of this site uses app.METHOD functions to add route 
                        handlers for HTTP requests. These are examples of Express middleware, 
                        but they take only two parameters: request and response. This is contrary 
                        to other Express middleware, which also take the parameter function next(). 
                        Other HTTP methods are also used in order to perform CRUD operations. 
                        This includes methods such as GET, POST, PUT, and DELETE.
                    </p></li>
                    <li><strong>Database Management Systems</strong> 
                    <p>This site uses a Database Management System (DBMS),
                    specifically MongoDB (more on that below). A DBMS is the 
                    software that is used to manage databases. This includes 
                    manipulating datasets using CRUD (create, read, update, delete) 
                    operations on large volumes of data.
                    </p></li>
                    <li><strong>MongoDB</strong> 
                    <p>MongoDB is the specific DBMS that 
                    is used for this site. MongoDB is a document DBMS that does 
                    not support SQL as a query language. It is useful because its 
                    format of documents closely resembles that of JSON, making the 
                    system easy to use in Node programs. MongoDB also 
                    internally stores documents in a binary format of JSON called 
                    BSON.
                    </p></li>
                    
                    <li><strong>REST APIs</strong> 
                    <p>API stands for 
                    Application Programming Interface. More simply, it is a web 
                    service that is accessible over HTTP. REST stands for Representational 
                    State Transfer. To be considered a RESTful service, the API must 
                    follow specific guidelines. This includes managing collections of 
                    resources, expose those collections using URLs, support CRUD 
                    operations using a set of HTTP methods, and be stateless, meaning 
                    that each HTTP request happens in isolation.
                    </p></li>
                    <li><strong>React</strong>
                    <p> React is a framework for writing frontend 
                    applications. React applications are based on the concept of components, 
                    which are reusable units of UI (User Interface). It creates a component 
                    tree from the components of an app and maps it to the DOM tree that 
                    a browser renders. Therefore, when writing a React application, the 
                    component is modified, rather than the DOM tree itself. This helps 
                    to update the DOM and minimize the rendering the browser must do. 
                    Other React components are also used, such as icons, the changing 
                    of the state variable, and hooks.
                    </p></li>

                </ul>
            </article>
        </>
    );
}

export default HomePage;