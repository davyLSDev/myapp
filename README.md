myapp
=====

An introductory test-driven development tutorial project which uses Express, Jasmine, and Zombie. Some other technologies represented here are: JavaScript, node, nvm, mocha, chai.

# Installation

Clone and execute:

```
cd myapp
npm install
```

# Testing

* make sure that the development server is running or else you will get test failures!

```
npm test
```

# Development Server

```
npm start
```

# Notes

* To keep from having to stop and restart the application as you modify it, use "nodem"
	* install it first "npu install nodemon -g"
	* run the application "nodemon [appname]" 
* 'npm init' (to initialize a project in the project directory)
* 'npm --package-lock-only (may be useful)

## References

* [Dan Bidulock blog](https://libertyseeds.ca/2020/04/20/How-to-get-started-testing-with-Express-Jasmine-and-Zombie/)
* [install npm for node etc](https://stackoverflow.com/questions/42564775/how-to-use-npm-install-without-sudo)
* [intro to JavaScript TDD](https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/)
* [fomrs](https://www.w3schools.com/html/html_forms.asp)
* [second installment to Dan's tutorial](https://whatdandoes.info/2020/05/04/How-to-get-started-testing-with-Express-Jasmine-and-Zombie-PART-DEUX/)

## Error to report to Dan

* in the indexSpec.js the assert should be 'What up, Dawson'
```
it('trims excess whitespace from the name submitted', done => {
    browser.fill('name', '                Dawson               ');
    browser.pressButton('Submit', () => {
      browser.assert.text('h3', 'What up, Dan?');
      done();
    });
  });
```

## Moving forward

* first commit everything in the project **except** node_modules/
* "ls -al node_modules" lists all the modules needed for this project
* "package.json.lock" lists all the modules as dependencies for this project.
  * it should be checked in to the project repo also
* "npm install" regenerates these modules