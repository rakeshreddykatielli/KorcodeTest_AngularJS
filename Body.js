  var status = element(by.binding('status'));
  var data = element(by.binding('data'));
  var fetchBtn = element(by.id('fetchbtn'));

  it('should make an xhr GET request', function() {
    fetchBtn.click();
    expect(status.getText()).toMatch('200');
    expect(data.getText()).toMatch(/Hello, \$http!/);
  });

  it('should make JSONP request to invalid URL and invoke the error handler',
      function() {
    fetchBtn.click();
    expect(status.getText()).toMatch('0');
    expect(data.getText()).toMatch('Request failed');
  });
