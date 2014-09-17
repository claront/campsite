'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('CampSite App', function() {

  browser.get('index.html');


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  describe('CampSite list view', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should filter the campsite list as user types into the search box', function() {

      var campsiteList = element.all(by.repeater('campsite in campsites'));
      var query = element(by.model('query'));

      expect(campsiteList.count()).toBe(5);

      query.sendKeys('Lambs');
      expect(campsiteList.count()).toBe(1);

      query.clear();
      query.sendKeys('but');
      expect(campsiteList.count()).toBe(2);
    });

    it('should be possible to control campsite order via the drop down select box', function() {

      var campsiteNameColumn = element.all(by.repeater('campsite in campsites').column('{{campsite.name}}'));
      var query = element(by.model('query'));

      function getNames() {
        return campsiteNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

      query.sendKeys('but'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Lambs Canyon",
        "Jordanell Resevoir"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

      expect(getNames()).toEqual([
        "Jordanell Resevoir",
        "Lambs Canyon"
      ]);
    });
  });

  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
