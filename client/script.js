

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Head />
        <Body />
        <Footer />
      </div>
    )
  }
}

class Head extends React.Component {

  render() {
    return (
      <div className="head">
        <h1>Easily Breezily React</h1>
      </div>
    )
  }
}

class Body extends React.Component {

  render() {
    return (
      <div className="body">
        <p>New developers who are just getting started with React shouldn't be burdened with also having to learn the ins-and-outs of Webpack. This project provides everything you need to get started building simple React projects (like the ones that are part of <a href="http://www.freecodecamp.com/">Free Code Camp's curriculum!</a>)</p>
        <p><span className="bold">Important:</span> this boilerplate is for learning purposes only, and it is not optimized for production. If the application you are building will go into production, you should be using the development tools and practices this boilerplate eschews.</p>
        <h3>Directions</h3>
        <p>The server and Sass compilation relies on Node and npm. Make sure these are installed are on your computer.</p>
        <p>After downloading the boilerplate into your project directory, run <code>npm install</code> to download the dependencies.</p>
        <p>To run the server, open a terminal, navigate to the root of your project directory, and run <code>node server.js</code>. To see your app, go to localhost:3000 in your browswer.</p>
        <p>The package.json file contains two scripts for compiling Sass:</p>
        <ul>
          <li>To do a one time compile, type <code>npm run build-css</code> into your terminal.</li>
          <li>To watch your Sass directory and compile on file changes, type <code>npm run watch-css</code>.</li>
        </ul>
        <h3>References</h3>
        <p>To learn more about how you can use npm to compile your Sass files, read <a href="https://medium.com/@brianhan/watch-compile-your-sass-with-npm-9ba2b878415b#.jmqrqhrp9">Watch & Compile your Sass with npm.</a></p>
        <p>For another really simple React boilerplate that acted as the starting point for this project checkout <a href="https://github.com/jarsbe/react-simple">React Simple</a></p>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>Created by <a href="http://www.thomas-johnson.net">Thomas Johnson</a></p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
