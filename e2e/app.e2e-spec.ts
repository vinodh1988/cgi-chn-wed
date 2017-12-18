import { CGICHENNAIPage } from './app.po';

describe('cgi-chennai App', () => {
  let page: CGICHENNAIPage;

  beforeEach(() => {
    page = new CGICHENNAIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
