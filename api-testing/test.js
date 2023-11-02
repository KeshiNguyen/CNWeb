
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('/app');
chai.use(chaiHttp);
const expect = chai.expect;

describe('API Tests', () => {
  before((done) => {
    app.listen(9000, () => {
      console.log('Server is running on port 9000');
      done();
    });
  });

  after((done) => {
    app.close(() => {
      console.log('Server has been closed.');
      done();
    });
  });

  it('should return "Hello, world!" when accessing the root endpoint', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, world!');
        done();
      });
  });
});
