import { NgwaterAppPage } from './app.po';

describe('ngwater-app App', () => {
  let page: NgwaterAppPage;

  beforeEach(() => {
    page = new NgwaterAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
