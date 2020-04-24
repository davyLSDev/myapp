const Browser = require('zombie');
Browser.localhost('example.com', 3000);
describe('the landing page', () => {
  let browser;
  /**
   * This loads the running web application
   * with a new `zombie` browser before each test.
   */
  beforeEach(done => {
    browser = new Browser();
    browser.visit('/', err => {
      if (err) return done.fail(err);
      done();
    });
  });
  /**
   * Your first test!
   *
   * `zombie` has loaded and rendered the page
   * returned by your application. Use `jasmine`
   * and `zombie` to ensure it's doing what you
   * expect.
   *
   * In this case, I just want to make sure a 
   * page title is displayed.
   */
  it('displays the page title', () => {
    browser.assert.text('h1', 'The Friendly Greeting Generator'); 
  });
  /**
   * Put future tests here...
   */
  
  // ...

  it('renders an input form', () => {
    browser.assert.element('input[type=text]'); 
    browser.assert.element('input[type=submit]'); 
  }); /*
    it('returns a friendly greeting if you enter your name and press Submit', done => {
    browser.fill('name', 'Dan');
    browser.pressButton('Submit', () => {
      browser.assert.text('h3', 'What up, Dan?');
      done();
    });
  });
  it('trims excess whitespace from the name submitted', done => {
    browser.fill('name', '                Dawson               ');
    browser.pressButton('Submit', () => {
      browser.assert.text('h3', 'What up, Dan?');
      done();
    });
  });
  it('gets snarky if you forget to enter your name before pressing Submit', done => {
    browser.fill('name', '');
    browser.pressButton('Submit', () => {
      browser.assert.text('h3', 'Whatevs...');
      done();
    });
  });
  it('gets snarky if you forget to enter a blank name before pressing Submit', done => {
    browser.fill('name', '         ');
    browser.pressButton('Submit', () => {
      browser.assert.text('h3', 'Please don\'t waste my time');
      done();
    });
  }); */
});