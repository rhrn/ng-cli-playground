import { NgCliPlaygroundPage } from './app.po';

describe('ng-cli-playground App', function() {
  let page: NgCliPlaygroundPage;

  beforeEach(() => {
    page = new NgCliPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
