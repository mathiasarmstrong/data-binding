var Robin = {
  extend: function(source, destination) {
    for (var prop in source) {
      destination[prop] = source[prop];
    }
    return destination
  }
}

var RobinObject = {
  render: function(template, values){
    for(key in values) {
      template = this.gsub(template, key, values[key])
    }
    return template
  },

  gsub: function(template, key, value){
    regex = new RegExp("{{" + key + "}}", "g")
    return template.replace(regex, value);
  }  
}


/*
Unfortunately will not be using our own selector :(
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

  addEventHandlersToArray(elements);

  return elements;
}

var addEventHandlersToArray = function(elements) {
  elements.on = function (event, func) {
    for (var i = 0; i < this.length; i++) {
      if (!this[i].events) {
        this[i].events = {};
      }

      if (!this[i].events[event]) {
        this[i].events[event] = []
      }

      this[i].events[event].push(func);
    }
    return this;
  };

  elements.trigger = function (event) {
    for (var i = 0; i < this.length; i++) {
      if (this[i].events && this[i].events[event]) {
        var callbacks = this[i].events[event];
        for (var j = 0; j < callbacks.length; j++) {
          callbacks[j].call(this[i]);
        }
      }
    }
    return elements;
  }
}
*/