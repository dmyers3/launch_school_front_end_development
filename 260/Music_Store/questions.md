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







  




