import { FirechatsPage } from './app.po';

describe('firechats App', function() {
  let page: FirechatsPage;

  beforeEach(() => {
    page = new FirechatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
