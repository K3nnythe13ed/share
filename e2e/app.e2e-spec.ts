import { SharePage } from './app.po';

describe('share App', function() {
  let page: SharePage;

  beforeEach(() => {
    page = new SharePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
