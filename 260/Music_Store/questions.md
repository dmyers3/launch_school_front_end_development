Do I have to npm install all needed dependencies at start of project or is there easier way?
When I set up with express it still uses jade – how to switch that over to Pug?
How to get Itunes data as JSON object?
Error: Cannot find module 'serve-favicon'
Error: Cannot find module 'morgan'
	-For above make sure you do npm install to install all dependencies!
	-Also need to require any additional ones added in app.js (ex. var stylus = require(‘stylus’);
	
Importing/Reading JSON using path/fs modules is quite confusing. Can copy/paste but really have
no knowledge of what/why I'm doing
  when to use certain syntax like 'require'

How to get stylus stylesheet to render?

At beginning I forgot to do bower init so I ended up using npm install for bower/grunt etc
  How is this different than bower install? server side?
  
To create new page, add pug view, javascript route, and set up route in app.js by adding variable requiring route at top,
app.use(route, routeName) - use ('/') instead of actual route name. Guessing this is so you can access route from ('/') and doesn't 
refer to actual location typed in by user?

Pug Break?
mixin stylesheet_link_tag(src)
  link(rel='stylesheet' href='/stylesheets/' + src + '.css') needed instead of:
  
  link(rel='stylesheet' href='/stylesheets/#{src}.css')
  
Album Node Module video explanation is missing

what is albums in index.pug - App.albums = new Albums(!{JSON.stringify(albums)}); ????

extends layout

block content
  h1= title
  ul#albums
    each album in albums
      li
        img(src=album.cover)
        h2 #{album.artist}
        h3 #{album.title}
        p #{album.date}
        p $#{album.price}
        a.button(href=album.url || "#") Add to Cart
block scripts
  script(type="text/javascript").
    console.log(#{albums});
    App.albums = new Albums(!{JSON.stringify(albums)});
    
console.log throws: Uncaught SyntaxError: Unexpected identifier


setting up Grunt handlebars - it mentioned live session. where is this?

When do we need to make sure we include other files? Is it basically what files are included in HTML/Pug File?

var App = {
  templates: JST,
  $el: $('main'),
  renderAlbums: function() {
    this.albums.each(this.renderAlbumView);
  },
  renderAlbumView: function(album) {
     new AlbumView({
       model: album
     })
  },
  init: function() {
      this.renderAlbums();
  }
};

Where does album come from in model: album? - passed in from each method. albums is set in standalone script in index.pug, in index.pug albums is sent in 
from index.js, which uses Album.get() defined in local node file album_node.js

When clicking on link, what makes address appear in bar? is that something router automatically does? since we used e.preventDefault I thought it would prevent
new address from showing

******************************* Video Process ******************************
create express application using express keyword and name of app (if app folder already
created navigate to that location and use 'express .')

Make sure Nodemon is installed and modify package.json to use nodemon instead of nodemon
to start app. (This restarts server after changes so you don't have to manually restart)
  can install as Dev dependency (-D on command line interface instead of -S)
  
run npm install to install all dependencies
  after install can run npm start to verify server running
  
run bower init to set up rest of dependencies
  can keep defaults the same, only change mark package as private to Yes
  
run bower install -S jquery backbone handlebars

install grunt as dev dependency using npm
  then install grunt-bower-concat, grunt-contrib-handlebars, grunt-contrib-uglify, 
  grunt-contrib-watch as dev dependencies using npm
  
create Gruntfile.js in root directory to automate tasks like concatening javascript files
and uglifying them
  
Go to app.js file in root directory and make sure it has everything needed (express has done a lot already)
  add requirements at top like stylus
  remove unnecesssary routes (2 places var routeName =... and app.use('...', routeName)
  
add JSON data to data directory (need to create that). JSON data taken from sample list of albums

read JSON data into index.js so it can be rendered
  use fs and path apis - need to require them at top of index.js
  
set up index pug file using album JSON data and each album in albums syntax

install stylus using npm also nib
  then set up app.js to use stylus
  
create application.styl file using desired css
  make sure to change stylesheet name in layout.pug to match (stylus automatically converts
  application.styl to application.css)
  
can use mixins to create functions/variables to use in stylus

***************End Part 1 **************************

create mixins file in views directory, starting with underscore
include _mixins in layout pug file
  can replace application css with mixin syntax- +mixin(args)
after using mixin need to modify express app (app.js in root)
  app.locals.basedir = path.join(__dirname, 'views');
  

To create new page, add pug view, javascript route, and set up route in app.js by adding variable requiring route at top,
app.use(route, routeName) - use ('/') instead of actual route name. Guessing this is so you can access route from ('/') and doesn't 
refer to actual location typed in by user?

create form on newAlbum.pug
  use names corresponding to object attribute names so you don't have to map after submitting form
  
add any CSS to form

Reduce routes down to just one main routes file and in that javascript file include all the other routes by iterating
through them

use router.post to send data to server. can get form data from req.body, send json response with res.json

Can load initial albums view from index.pug so that you don't have to call server after page loads - saves time

Use grunt-contrib-handlebars to precompile handlebars templates - need to make sure installed and add to Gruntfile

set up Handlebars template, create templates property in main application.js App object and set that equal to JST (or however else
you store all your templates)
  this way you can do App.templates.(specific_template) in your view as the template
  

Node.js server
  modules
Express framework - used for backend
  routes
    javascript files
  views
    pug files
    stylus for css
  app.js - main file with settings
Bower to manage dependencies
Grunt task manager
  automates things like concatening all dependencies to make one file, minifying
  that file, automatically making handlebars templates
Backbone
  models
  collections
  views
  router
  events
  

app.js
  var routes = require('./routes/all'); sets routes equal to return value of require function, which 
    is value of module.exports of /routes/all.js
  app.set('view engine', 'pug');
    sets up pug to be used to render views
  app.use('/', routes);
    when user accesses root directory, uses routes variable- this has all functionality from javascript files in routes directory (see all.js below)
  
  all.js
    iterates through other files in routes directory
    require(path.resolve(path.dirname(__dirname), "routes/" + route_files[i]))(router);
      that passes router (which is method on express object) to return value of
      each file in routes directory - which we set up to be a function
        the function in each file sets up http actions (get/post/put/delete) for specified URL's
        and dictates what is done when those http requests are sent (i.e they can take a request and perform
        any actions and then send a response)
    index.js is for handling index page
    albums.js is for new albums form, posting new albums, (editing, and deleting http requests present but not used in app yet)
    
Pug
  template engine to compile HTML. its a way to use variables which are replaced at runtime with actual values and compiled to HTML
  res.render in express routes will use pug to compile html with this syntax: res.render(view [, locals] [, callback])
    view is name of pug file, locals is object containing variables to be passed to pug file
  can use Pug mixins, which are similar to functions in that they take arguments and 
    
Stylus
  used similarly to Pug to compile CSS to render the HTML. 
  
Node modules
  use module.export to transport functionality between different files
  require(filename) returns value of filename's module.export
  
Essentially express loads initial HTML page after it is compiled by Pug. This file contains all the javascript to execute
the Backbone models/collections/views of the application.

    











  




