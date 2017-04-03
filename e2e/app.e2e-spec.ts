import { StarWarsApiPage } from './app.po';

describe('star-wars-api App', function() {
  let page: StarWarsApiPage;

  beforeEach(() => {
    page = new StarWarsApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
