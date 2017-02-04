import { MyPagePage } from './app.po';

describe('my-page App', function() {
  let page: MyPagePage;

  beforeEach(() => {
    page = new MyPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
