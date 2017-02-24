(function() {  
  var _ = function(element) {
    var u = {
      last: function() {
        return element[element.length - 1];
      },
      
      first: function() {
        return element[0];
      },
      
      without: function(values) {
        var args = Array.prototype.slice.call(arguments);
        var withoutArr = [];
        element.forEach(function(val) {
          if (args.indexOf(val) === -1) {
            withoutArr.push(val);
          }
        });
        return withoutArr;
      },
      
      // range: function(val1, val2) {
      //   var start = val2 ? val1 : 0;
      //   var end = val2 ? val2 : val1;
      //   var rangeArr = [];
        
      //   for (var i = start; i <= end; i += 1) {
      //     rangeArr.push(i);
      //   };
      //   return rangeArr;
      // },
      
      lastIndexOf: function(value) {
        var lastIndex = -1;
        element.forEach(function(val, idx) {
          if (val === value) {
            lastIndex = idx;
          }
        });
        return lastIndex;
      },
      
      sample: function(quantity) {
        var numSamples = quantity || 1;
        var samplingArray = element.slice();
        var sampledArray = [];
        
        for (var i = 1; i <= numSamples; i += 1) {
          var sampleIndex = Math.floor(Math.random() * (samplingArray.length));
          sampledArray.push(samplingArray[sampleIndex]);
          samplingArray.splice(sampleIndex, 1);
        }
        return numSamples === 1 ? sampledArray[0] : sampledArray;
      },
      
      findWhere: function(properties) {
        for (var i = 0; i < element.length; i += 1) {
          var check = true;
          for (var key in properties) {
            if (element[i][key] !== properties[key]) {
              var check = false;
            }
          }
          if (check) {
            return element[i];
          }
        }
        return undefined;
      }
    };
  
    return u;
  };
  
  _.range = function(val1, val2) {
    var start = val2 ? val1 : 0;
    var end = val2 ? val2 : val1;
    var rangeArr = [];
        
    for (var i = start; i < end; i += 1) {
      rangeArr.push(i);
    };
    return rangeArr;
  },
  
  window._ = _;
})();
  
