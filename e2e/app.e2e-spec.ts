import { CachepocPage } from './app.po';

describe('cachepoc App', () => {
  let page: CachepocPage;

  beforeEach(() => {
    page = new CachepocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
