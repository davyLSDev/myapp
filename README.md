# This is a tutorial on TDD JavaScript

## Using express, jasmine, and zombie

### JavaScript, node, nvm, mocha, chai

## Notes

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
