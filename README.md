# Static Node.js and Express Site

A portfolio site to showcase the projects I've built, provided by the treehouse FSJS techdegree. The site contains a modern landing page, an about page, and a series of project pages to show work.

- I had to create a JSON file to store all the about data about the projects I created.
- Use Pug to complete provided templates that utilize the JSON to generate the markup that is ultimately displayed in the browser.

I used Node.js and Express to:

- Import the required dependencies
- Link the JSON with the Pug templates
- Set up routes to handle requests
- Set up the middleware to utilize static files like CSS
- Handle errors
- Set up a server to serve the project

Extra development created for highest grade:
- Customize the `package.json` file so that running `npm start` will run the app.
- Create two new Pug templates in the `views` folder (`error.pug` and `page-not-found.pug`) which conditionally render based on an error and the error status code.
- Customize the style
  - Changed font
  - transitions for links and project thumbnail hovers
  - Custom logo

Grade: Exceeds Expectations
