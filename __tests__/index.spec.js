import { getHome } from '../controllers/pages.js';

describe('Express server', () => {
  it('Responds to /', () => {
    const req = {};
    const res = {
      text: '',
      send: function (input) {
        this.text = input;
      }
    };
    getHome(req, res);
    expect(res.text).toBe('Hello there');
  });
});
