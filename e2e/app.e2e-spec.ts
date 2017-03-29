import { LearningAppPage } from './app.po';

describe('learning-app App', () => {
  let page: LearningAppPage;

  beforeEach(() => {
    page = new LearningAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
