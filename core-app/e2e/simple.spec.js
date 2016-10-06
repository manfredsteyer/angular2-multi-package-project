describe("FlugApp", function() {

    beforeEach(function() {
        browser.get('http://localhost:8081/');
    });

    it('should load page and read title', function() {

          var expectedTitle = 'FlightApp';
          var actualTitle = browser.getTitle();
          expect(actualTitle).toBe(expectedTitle);
 
    });
});
