module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;
    return this.addBowerPackageToProject('plupload', 'v2.1.3').then(function () {
      return self.addBowerPackageToProject('dinosheets','0.0.1');
    });
  }
};
