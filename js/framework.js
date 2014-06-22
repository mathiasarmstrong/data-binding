// Creating the selector for classes
var $ = function(selector) {
  var elements;
  if (selector[0] === '.') {
    elements = document.getElementsByClassName(selector.slice(1));
  } else if (selector[0] === '#') {
    elements = document.getElementById(selector.slice(1));
    if (elements) {
      elements = [elements]
    } else {
      elements = []
    }
  } else {
    elements = document.getElementsByTagName(selector);
  }
  return elements;
}