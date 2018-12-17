import { IntellithinkPocPage } from './app.po';

describe('intellithink-poc App', () => {
  let page: IntellithinkPocPage;

  beforeEach(() => {
    page = new IntellithinkPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
