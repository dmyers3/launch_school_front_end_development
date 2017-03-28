// set up Handlebar templates/partials
// render existing events by making ajax request to /events and then using handlebar templates

// create methods on parent Events object

$(function() {
  var eventsList;
  var eventTemplate;
  
  var Events = {
    init: function() {
      this.collection = [];
      this.$el = $('#events_list');
      this.createTemplates();
      this.retrieveEventsFromServer();
      this.addEventListeners();
    },
    add: function(events) {
      var self = this;
      events = Array.isArray(events) ? events : [events];
      
      events.forEach(function(event) {
        self.collection.push(event);
      });
      self.sort();
      self.render();
    },
    sort: function() {
      this.collection = this.collection.sort(function(event1, event2) {
        return event1.date > event2.date ? 1 : -1;
      });
    },
    createTemplates: function() {
      eventsList = Handlebars.compile($('#events').html());
      eventTemplate = Handlebars.compile($('#event').html());
      
      Handlebars.registerPartial('event', $('#event').html());
    },
    retrieveEventsFromServer: function() {
      var self = this;
      $.ajax({
        url: "/events",
        method: "GET",
        success: function(events) {
          self.add(events);
        }
      });
    },
    render: function() {
      this.$el.html(eventsList({events: this.collection}));
    },
    remove: function(idx) {
      var matchingEvent = this.collection.filter(function(event) {
        return event.id === idx;
      })[0];
      
      if (!matchingEvent) { return };
      
      this.collection = this.collection.filter(function(event) {
        return event.id !== matchingEvent.id;
      })
      
      this.sort();
      this.render();
      
      $.ajax({
        url: "/events/delete",
        method: "POST",
        data: "id=" + idx,
        success: function(event) {
          console.log(event);
        }
      });
    },
    addEventListeners: function() {
      this.addSubmitListener();
      this.addRemoveListener();
    },
    addSubmitListener: function() {
      var self = this;
      $('form').on('submit', function(e) {
        e.preventDefault();
        var $f = $(this);
        $.ajax({
          url: $f.attr('action'),
          method: $f.attr('method'),
          data: $f.serialize(),
          success: function(event) {
            self.add(event);
          }
        })
      })
    },
    addRemoveListener: function() {
      var self = this;
      $('#events_list').on('click', 'a.remove', function(e) {
        e.preventDefault();
        var id = parseInt($(e.target).closest('li').attr('data-id'));
        self.remove(id);
      })
    },
    
  };
  
  
  Events.init();
})
