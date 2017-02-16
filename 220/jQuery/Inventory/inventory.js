var inventory;

(function() {
  inventory = {
    collection: [],
    setDate: function() {
      $('#order_date').text(new Date().toUTCString());
    },
    cacheTemplate: function() {
      this.template = $("[type='text/template']").text();
      $("[type='text/template']").remove();
    },
    lastID: 0,
    addDefaultItemToCollection: function() {
      var defaultItem = { id: inventory.lastID, name: '', stockNumber: '', quantity: 1 };
      inventory.collection.push(defaultItem);
    },
    addItemEventHandler: function() {
      $('#add_item').on('click', function() {
        inventory.lastID += 1;
        var newIDTemplate = inventory.template.replace(/ID/g, inventory.lastID);
        $('#inventory').append(newIDTemplate);
        inventory.addDefaultItemToCollection();
        console.log(inventory.collection);
      });
    },
    updateItemEventHandler: function() {
      $('#inventory').on('blur', function(e) {
        console.log(e.target);
        
        // get item ID from element that loses blur
        //   look at name, split on underscore and take last element?
        // get type of element it is, i.e name, stocknumber or quantity
        //   look at name, split on underscore take 2nd element (either name, stock, quantity)
        // filter inventory.collection based on item ID
        //   set that item attribute to new value
        
      });
    },
    deleteItemEventHandler: function() {
      $('#inventory').on('click', 'a.delete', function(e) {
        e.preventDefault();
        $(e.target).closest('tr').remove();
      });
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.addItemEventHandler();
      this.updateItemEventHandler();
      this.deleteItemEventHandler();
    },
  };

})();


$(inventory.init.bind(inventory));
