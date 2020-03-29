function Set() {
  var collection = [];
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  }
  this.values = function() {
    return collection;
  }
  this.add = function(el) {
    return this.has(el) ? false : Boolean(collection.push(el));
  }
}