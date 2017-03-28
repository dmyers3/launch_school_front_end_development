function ModelConstructor(options) {
  var idCount = 0;
  
  function Model(attrs) {
    idCount += 1;
    
    var self = this;
    self.attributes = attrs || {};
    self.id = idCount;
    self.attributes.id = idCount;
    
    if (options && options.change && _.isFunction(options.change)) {
      this.__events.push(options.change);
    }
  }
  
  Model.prototype = {
    set: function(key, val) {
      this.attributes[key] = val;
      this.triggerChange();
    },
    get: function(key) {
      return this.attributes[key];
    },
    __events: [],
    triggerChange: function() {
      this.__events.forEach(function(cb) {
        cb();
      });
    },
    remove: function(key) {
      delete this.attributes[key];
      this.triggerChange();
    },
    addCallback: function(cb) {
      this.__events.push(cb);
    },
  };
  
  _.extend(Model.prototype, options);
  
  return Model;
}

function CollectionConstructor(options) {
  
  function Collection(modelConstructor) {
    this.model = modelConstructor;
    this.models = [];
  }
  
  Collection.prototype = {
    reset: function() {
      this.models = [];
    },
    add: function(model) {
      var oldModel = _(this.models).findWhere({ id: model.id });
      var newModel;
      
      if (oldModel) {
        return oldModel;
      } else {
        newModel = new this.model(model);
        this.models.push(newModel);
        return newModel;
      }
    },
  };
  
  _.extend(Collection.prototype, options);
  
  return Collection;
}

