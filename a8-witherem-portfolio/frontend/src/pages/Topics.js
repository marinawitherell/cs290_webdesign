import React from "react"

function Topics(){

    return (
        <>
            <h2>Web Development Concepts</h2>

            <nav class="local">
                <a href="#WebServers">Servers</a>
                <a href="#FrontendDesign">Frontend</a>
                <a href="#OptimizingImages">Images</a>
                <a href="#Favicons">Favicons</a>
                <a href="#css">Stylesheets</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javascript">JavaScript</a>
            </nav>

            <article id="WebServers">
                <h3>Web Servers</h3>
                <p>As it relates to websites and servers, the <strong>index file</strong> is the file that 
                    automatically opens on the web server. It is known as the designated 
                    homepage of the web application. It is located in the root directory
                    of the application. Depending on the server, the homepage is identified
                    with different names, including index.html or default.html.
                </p>
                <p>The browser's <strong>Web Dev/Inspector Network tab</strong> output screen contains
                    information on the file. This includes the headers, preview of the
                    file, and the response or code. The headers section contains the 
                    request URL, the request method, status, as well as more information 
                    on the response and request headers. When the file is viewed from the 
                    web server, then the request URL is the path to the file on the server.
                    When the file is viewed from the local computer, the request URL is 
                    the path to the file on the computer's hard drive. This is an important
                    difference because it shows where each file is coming from, which is
                    crucial for websites, even if it is the same file being displayed.
                    Additionally, when the file is viewed from the web server, the page
                    was requested using the method GET.
                </p>
                <p>The favicon.ico file has a <strong>status</strong> of 200 because it is automatically 
                    generated for files on the OSU engineering server. However, the main.css
                    and main.js files do not have that status because those files are not
                    automatically generated and therefore do not exist. This is why they 
                    have a 404 status, which means that the file is not found. They do 
                    not have a status of 200, or in other words, a successful status.
                </p>
                <p>The <strong>URL of the web file</strong> is https://web.engr.oregonstate.edu/~witherem/a1-witherem/.
                    In this case, the scheme is https://, the subdomain is web.engr., the domain is 
                    oregonstate.edu, and the resource/path is ~witherem/a1-witherem/.
                </p>
            </article>
            <article id="FrontendDesign">
                <h3>Frontend Design</h3>
                <p>
                    Frontend design is the design of the website with user interactions in 
                    mind. This includes an interesting color scheme, font, media, icons, etc. 
                    These make the user more interested in the site, and it also makes the site
                    seem more professional because of the personalized theme. If the site looked
                    too amatuer it could damage the company's credibility in the eyes of the user.
                    Additionally, the navigation must be easy to use and understand, while adhering
                    to the theme. The main goal is for usability to have the 5 "E"s (listed below), 
                    which leads to a <strong>good user experience</strong>. Some issues that can negatively 
                    impact usability include a long response time, too many content depth 
                    levels that the user may get lost in, and the need to often switch 
                    between different input devices, which should be minimized. All of these 
                    issues can be tested and handled with <strong>usability testing</strong>, in which a 
                    user's actions are analyzed while they navigate through a prototype of 
                    the website without any help from the designer. This could include giving 
                    the user a task and recording the path they take, the time it takes them, 
                    what errors are made, and if they succeed in completing the task.
                </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>The website helps users obtain accurate results that meet their goals</dd>
                    <dt>Efficient</dt>
                    <dd>The website minimizes the number of steps it takes for a user to 
                        complete their task
                    </dd>
                    <dt>Easy to Navigate</dt>
                    <dd>The users must be able to use the website easily without
                        prior knowledge or experience on the website.
                    </dd>
                    <dt>Error Free</dt>
                    <dd>The website must be fully working with no errors, which can be 
                        achieved through user testing. This helps with accessibility and availability.
                    </dd>
                    <dt>Enjoyable or Engaging</dt>
                    <dd>The website must keep the user engaged with content and design.
                        This includes the use of the previous 4 "E"s.
                    </dd>
                </dl>
                <p>
                    <strong>Page layout tags</strong> are block-level elements that break up the flow 
                    of the content. It helps the user pay attention to new topics and 
                    visually and mentally group similar content. Additionally, it helps
                    the user find the content they are looking for more efficiently. 
                    It also helps machines to understand where each component is on the 
                    page. Most pages include the page layout blocks header, nav, main,
                    section of articles, asides, and footer. The header is like a banner of the 
                    site, with the title and logo of the company. It is typically the same on all 
                    tabs/pages of the site. The nav tag takes the user from one page on the site
                    to another. This helps with organization and avoiding too much information
                    on one page. The main tag is the block that holds the content of the page.
                    A section is a group of content that is all related, but doesn't stand on
                    its own. An article is a part of the section and breaks up the content
                    with more organization levels. A footer is the information at the bottom
                    of the page, usually including contact information and copyright information.
                    These page layout tags improve usability and user experience.
                </p>

                <ol>
                    <li><strong>External</strong> anchors create a link to a page outside the current 
                        website with a URL. When the user clicks on the anchor, their 
                        screen will automatically navigate to the new URL. This type of 
                        anchor uses absolute paths. An absolute path is a complete URL 
                        to a resource.
                    </li>
                    <li><strong>Internal</strong> anchors create a link from one text item to another text 
                        item on the same page by using IDs. A tag can have an ID attribute, 
                        allowing it to be distinguished by the anchor. This type of anchor 
                        uses relative paths. A relative path is a URL for a file relative to 
                        the current file. This can be a path to a file in the same directory,
                        a child directory, or a parent directory. 
                    </li>
                    <li><strong>Page-to-page anchors</strong> can also be created. This must include a 
                        nav tag with an anchor for each link to another page on the site. 
                        They can be styled like buttons and displayed horizontally to create 
                        "tabs" that the user will be able to easily understand and use. 
                        Additionally, they can lead to external social medial sites and 
                        other resources.
                    </li>
                </ol>
            </article>
            <article id="OptimizingImages">
                <h3>Optimizing Images</h3>
                <p>
                    There are <strong>six major specifications</strong> of images 
                    for the web. One is a <strong>descriptive file name</strong>. 
                    Each file/image must be saved with a name that describes the 
                    image while still being short and concise. This will improve 
                    search engine optimization, meaning that the search engine bots 
                    will be able to recognize it when users search for similar images. 
                    Another major specification is a <strong>small file size</strong>. 
                    Files must be as small as possible for a fast load time, which is 
                    necessary for a good user experience. High resolution images can 
                    be served to high resolution devices used attributes such as srcset="" 
                    and sizes="". Lossy compression makes images smaller and can cause 
                    pixelation or low image quality. On the other hand, lossless 
                    compression doesn't degrade the image quality. <strong>Exact dimensions</strong> 
                    is another major specification. It concerns sizing an image to fit 
                    the space on the webpage by pixels. Large images will load slowly. 
                    There is also the specification of <strong>correct file format</strong>. 
                    This means that different types of images must be saved as a file 
                    type specific to that image type. <strong>Reduced resolution</strong> 
                    is a specification regarding the resolution of the image in 
                    relation to the resolution of the monitor. Multiple image sizes 
                    are often provided for different resolution for different devices. 
                    The last major specification is <strong>color mode</strong>. This 
                    specifies the color mode for the image and uses RGB for .PNG, .JPG, 
                    .SVG, and .WebP, and Indexed for .GIF and sometimes .PNG. 
                </p>
                <p>
                    As mentioned above, different types of images should have different file formats. 
                    Photographic images should be saved as JPEG or WebP files 
                    because they have the most variety of colors. These files can then 
                    be resized and compressed. Line art images can be in a variety of 
                    different file formats, depending on what the image is used for. 
                    GIF files can be used for line-art graphics because they can have 
                    8-bit transparency and the image edges are matted to a background 
                    color. This is useful for line are that will be placed over a single 
                    background color. On the other hand, PNG files have true transparency 
                    and can be placed over a background with many colors. This is best 
                    used for line art that will go over other images, or have a more 
                    intricate background. Another file type is SVG, but that is used 
                    for interactive or animated images.
                </p>
            </article>
            <article id="Favicons">
                <h3>Favicons</h3>
                <p>
                    Favicons are symbols that represent a certain company, website, or app. 
                    They are displayed on browser tabs and typically on the site itself. 
                    The image is modified to work best on different devices and then is saved in 
                    multiple file formats, so that the best one can be chosen, depending 
                    on both the browser and the device. The browser can save the icon 
                    with an anchor, so that the website and the favicon can jointly be 
                    added to a favorites list or saved as a bookmark. Favicons can be saved 
                    in .GIF, .PNG, .ICO, and .SVG file formats. The most commonly used formats 
                    .SVG, .PNG, and .ICO in older web browsers.
                </p>
            </article>
            <article id="css">
                <h3>Cascading Stylesheets</h3>
                <p>
                    Most websites and apps <strong>incorporate stylesheets</strong> in order to globally 
                    define the style within the website/app. The default HTML style uses 
                    Time New Roman font, 8 pixels of margin, and 0 vertical height. While 
                    this may fit some standards, it makes the website look boring and, by 
                    extension, more amateur. Additionally, the page layout tags are empty 
                    blocks with no dimensions. The web designer must give them dimensions 
                    to make the site more attractive to users, easier to navigate, and 
                    easier to find the information they are looking for. A stylesheet 
                    allows a web designer to create a style that is used by each page in 
                    the website. This can help save time, and also keep the style consistent, 
                    which may help the site be both brandable and readable. Additionally, a 
                    stylesheet can create variety and dimension between each of the page 
                    layout tags. Again, this can help the user find the information they 
                    are looking for more efficiently and keep their attention on the site. 
                </p>
                <p>
                    There are <strong>5 ways to incorporate styles</strong>. The first one 
                    is with <strong>externally linked .CSS files</strong>. This is done 
                    with one or more external files with the .css file extension. The 
                    files are linked in the global head area of the website. Additionally, 
                    other stylesheets for specific components can be linked after the 
                    global .css file, or imported in that global stylesheet. Externally 
                    linked .CSS files are the typical method of style incorporation used 
                    for apps or websites because they are the most efficient. Styles can 
                    also be <strong>embedded</strong> in a style tag directly in HTML and 
                    JavaScript files. Another way to declare style elements is <strong>inline</strong> 
                    within an element by using an attribute and a value. <strong>JavaScript template literals</strong> 
                    within a JavaScript function can also be used, which creates a variable 
                    with a value of the style and change one or more of its attributes. 
                    The last way to incorporate styles is in <strong>regular JavaScript</strong> 
                    by manipulated the Document Object Model (DOM). This looks in the HTML 
                    document to find the value of the style and change one or more of its 
                    attributes. The last four ways to incorporate style are typically for 
                    one-off style changes only, and is another reason why externally linked 
                    .CSS files are the most commonly used for introducing styles.
                </p>
            </article>

            <article id="forms">
                <h3>Forms</h3>
                <p>
                    There are <strong>six major goals of accessible forms</strong>. 
                    A form must <strong>provide clear instructions</strong> around the 
                    form and in the labels. This helps explain what information the 
                    user should put in the form. Placeholders are not helpful to those 
                    that are visually impaired. A form must also tell the user 
                    <strong>why the data is being gathered and which fields are required</strong>. 
                    This is important because they must know what the point of entering 
                    their information is and what information they have to fill out in 
                    order to proceed as opposed to what information they can skip. The 
                    form must <strong>set the first field to autofocus</strong> so that 
                    the user may start typing immediately. This helps lower the amount 
                    of switches between input devices the user must make. Additionally, 
                    a form must allow for <strong>each form control to be filled in using a keyboard</strong>. 
                    This is for those who may be unable to use a mouse or a trackpad. 
                    Another goal of a form is to <strong>add tab indexing to complex forms</strong>. 
                    This makes it more clear to the user the order that the fields should 
                    be filled. Finally, a form should <strong>ensure validation messages are screen readable</strong> 
                    as opposed to the built-in HTML browser message that is not screen 
                    readable. This ensures that the user is clear of if their form was 
                    filled out properly and received. All of these goals help forms be 
                    accessible to a wider variety of users, including those with disabilities 
                    or those with limited experience.

                </p>
                <p>
                    There are a few <strong>major tags</strong> when it comes to forms. 
                    The first one is the <strong>form</strong> tag itself. This tag 
                    is what declares the actual form itself and normally includes input elements. It has two 
                    attributes. The action attribute specifies where the request from 
                    the form should be sent. The method attribute specifies the HTTP 
                    method to be used in the HTTP request that is sent when the form 
                    is submitted. This can also include tags such as the fieldset and 
                    legend tags which separate the form controls into groups and the 
                    label tag that is paired with controls to help the user understand 
                    the purpose of their data entry. The <strong>input</strong> tag 
                    is another major tag. This is used for data input from the user. 
                    It has the attribute type that changes how the data is displayed, 
                    used, and what other attributes can be included. Some types include 
                    email (allows for email address input), checkbox (allows for multiple 
                    items to be chosen), and radio (allows for only one item to be 
                    chosen). The input tag also 
                    requires a name attribute so that the server knows which part of 
                    the form each data item is associated with. Another attribute is 
                    required. This defines some input as being required information 
                    the user must fill out in order to submit the form. Other major 
                    tags are <strong>select and option</strong> tags. These provide the 
                    user with a drop-down menu list of items that the user can choose 
                    one of. This also has the name attribute. Option tags define the choices 
                    of the drop-down list. The <strong>textarea</strong> tag allows users 
                    to input multiple lines of text. It has its own label and many 
                    attributes, including how many characters the message can be and 
                    the placeholder text. The <strong>button</strong> tag is used 
                    typically as a "submit" button for the user to click when they are 
                    done entering information into the form. This performs the action 
                    specified by the form tag. 
                </p>
                <p>
                    There are a few <stong>major form style recommendations</stong> to improve 
                    usability. One is to use <strong>fieldset</strong> with borders, margins, and padding 
                    in order to group form controls and distinguish it from others. <strong>Legends</strong> 
                    should stand out to describe each fieldset, so its color and font size 
                    should be different from the labels. <strong>Labels</strong> should have a display property 
                    to distinguish it and a smaller font size. <strong>Input, button, textarea, and select</strong> 
                    should have increased font size and padding to help the user easily tap the 
                    controls. It should also have the same font as the body. <strong>Autofocus</strong> 
                    places the cursor in the first field so that the user can type right away 
                    without having to use the mouse or trackpad. The <strong>required</strong> 
                    status tells the user which fields are important. This can be added 
                    as a class in the CSS. <strong>Validity</strong> of a user's input can 
                    be shown by changing the border color (red for invalid, green for valid). 
                    <strong>Placeholders</strong> should have a different color so that the 
                    user knows to still fill that section in, it is not automatically filled 
                    out for them. <strong>Checked selectors</strong> change what the checked box 
                    or radio button looks like when checked or unchecked in order to give more 
                    visual confirmation of which option is checked. <strong>Disabled and enabled</strong> 
                    attributes keep parts of the form inaccessable to the user until they have 
                    provided the necessary input. Ultimately, the form style should have 
                    changes in size, placement, color, and spacing for different parts of the form in order to 
                    distinguish it from other parts. This improves usability for all types of 
                    devices, while still allowing the user to easily see what information is 
                    needed on the form and what information they have provided.
                </p>
            </article>

            <article id="express">
                <h3>Express</h3>
                <p>
                    There are <strong>three technologies</strong> that can be used to 
                    improve web development experience. <strong>Node</strong> is a 
                    widely used runtime environment for developing and running server-side 
                    web applications in JavaScript. It provides a library of JavaScript 
                    modules that simplifies the development of web applications. Node 
                    is used to improve the web development experience by making it more 
                    simple to create a web application on a server and by simplifying the 
                    use of JavaScript for those that are not experts on the language. 
                    This includes having libraries with pre-made modules, so that the 
                    developer doesn't have to come up with everything from scratch. 
                    The technology <strong>npm</strong> is a package manager for Node. 
                    This is one of the packages that Node.js comes with that has been 
                    developed and tested by the developer community. It is an online 
                    repository for publishing Node.js packages and also a command-line 
                    utility that can install packages from the online repository. This 
                    can be extremely helpful in web development because it allows the 
                    developer to access and install packages into their code that 
                    can create a skeletal outline of their application. This can be modified 
                    to fit the developer's needs, but ultimately it saves time and energy 
                    because it is easy to install and proven to work. <strong>Express</strong> 
                    provides a Application Programming Interface of common tasks that 
                    web applications need to go. This can be used in web development 
                    because it allows for the ability to get, post, and delete data. It 
                    also defines the ports and routs that data will take. Finally, it 
                    can serve static files from a public folder and can build responses 
                    to data.
                </p>
            </article>
            <article id="javascript">
                <h3>JavaScript</h3>
                <p>
                    There are <strong>six main data types</strong> in JavaScript. An <strong>object</strong> 
                    is a set of name-value pairs. These are properties that can be created, 
                    updated, read, and deleted from the object. All other data types are called 
                    primitive types. <strong>Numbers</strong> are one of these types. <strong>Boolean values</strong> 
                    are another data type. These are either true or false. A <strong>string</strong> 
                    is like text. It contains characters that can be read. Another data type 
                    is a <strong>symbol</strong>, which is not as common. The last type is 
                    <strong>special values</strong>. This consists of values that are undefined 
                    or null.
                </p>
                <p>
                    <strong>Objects</strong> are a set of name-value pairs, as previously mentioned. 
                    The names of the pairs are known as the object's properties. These properties 
                    are able to be modified (created, read, updated, and deleted) and must be of 
                    the string data type. They are used to create variables with attributes that 
                    can be modified by the user. <strong>Arrays</strong> are objects whose property 
                    names are the strings 0, 1, 2, etc. They are used to store elements that are 
                    accessible by their index. For example, the first element of the array would 
                    be [0]. Arrays are also iterable, which is very helpful for accessing multiple 
                    elements in a row, and has many other applications. The array itself can also 
                    be added to, taken from, and modified in other ways. <strong>JSON</strong> 
                    stands for JavaScript Object Notation. It is used to do two tasks. The first 
                    one is to map an object in a program to a string in the JSON format. The second 
                    task is to create an object in a program from a string in the JSON format. This 
                    is useful because it is independent of any programming language, which allows 
                    different programs to exchange data, even if they are written in different 
                    languages. 
                </p>
                <p>
                    <strong>Conditionals and loops</strong> are used for many different 
                    things. <strong>Conditionals</strong> include "if" and "switch" statements. If statements 
                    will execute if the condition is true. This can also include if-then-else 
                    statements, where the else branch executes if the condition is not true. 
                    Switch statements compare a variable to different values. The expression is 
                    evaluated and then the matching case branch is executed and ends with a break 
                    statement. If none of the case branches match, then the default branch is executed. 
                    A conditional operator can also be used which is in the format: 
                    condition ? expression1 : expression2. This means that if the condition is 
                    true then execute expression1, otherwise execute expression2. <strong>Loops</strong> 
                    repeat an execution until the specified break occurs. A "while" loop 
                    will execute the statement if the given expression is true and then check 
                    the expression and execute the process again until it is not true. A 
                    "do while" loop will execute the process, then repeat if the expression is 
                    true. This will always execute at least once. A "for" loop is mainly used to 
                    iterate through values. It contains an initialization statement, which 
                    is executed once, a loop condition that is evaluated for each execution, and 
                    a repeating statement that is executed after each loop (typically additive, 
                    which moves the iterator to the next element). The "for of" loop is specifically  
                    iterative and used to iterate over strings or arrays. This is different 
                    from a normal for loop because it is restricted to only the elements of 
                    a certain value. A "for in" statement is used to iterate over the properties 
                    of an object.
                </p>
                <p>
                    <strong>Object-oriented programming</strong> supports the use of objects 
                    and, in JavaScript, allows the objects to be created without declaring a class.
                    The objects are expected to have an identity, state, and behavior. Identity 
                    makes two objects distinct from the other. The state is the string associated 
                    with a certain property. Behavior can be added to an object by adding properties 
                    whose values are functions. Prototypes can be used for this. A prototype is a 
                    special object that collects properties common to multiple objects. The prototype 
                    can then be used to create objects with the same properties. 
                </p>
                <p>
                    <strong>Functional programming</strong> allows for functions to be created 
                    and used. In JavaScript, functions are "first-class" values, meaning that 
                    we can assign functions to variables, define functions that receive other functions 
                    as arguments, and define functions that return functions. These can be used 
                    to map key-value pairs, filter through arrays, and much more. Anonymous 
                    functions can be used in cases of functions that don't have a general use. 
                    These are similar to normal functions, except they are defined using function 
                    expressions (expressions that return a function). It is called "anonymous" 
                    because it is declared without the use of a name.
                </p>
            </article>

    </>
    );
}

export default Topics;