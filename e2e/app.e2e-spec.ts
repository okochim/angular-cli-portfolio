import { AucnetStationLoginPage } from './app.po';

describe('aucnet-station-login App', function() {
  let page: AucnetStationLoginPage;

  beforeEach(() => {
    page = new AucnetStationLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
