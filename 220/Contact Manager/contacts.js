// section at top with add Contact button and search field

// main section
//   starts with no contacts and add contact button
//   when add contact button pressed slides up and has create contact form
//   when contacts are present it lists them in order with info and edit/delete buttons
//     edit is same form as add contact just with edit contact at top
//     delete gives popup alert to verify
  
//   add/edit person verifies email address to make sure there is @ present
  
//   media breakpoint at 768px to go one column for contacts and addcontact/search
  


$(function() {
  var contactTemplate = Handlebars.compile($('#contact_template').html());
  var addEditTemplate = Handlebars.compile($('#add_edit_template').html());
  var contactsList = Handlebars.compile($('#contacts_list').html());
  
  Handlebars.registerPartial('contactTemplate', $('#contact_template').html());
  
  var contacts = getContacts() || [];
  var noContactsHTML = '<div class="no_contacts"><p>There are no contacts.</p><a class="button add" href="#">Add Contact</a></div>';
  
  displayContacts();
  
  var Contact = {
    init: function(name, phone, email, tags) {
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.tags = tags;
      return this;
    }
  };
  
  function setContacts(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  
  function getContacts() {
    return JSON.parse(localStorage.getItem('contacts'));
  }
  
  function displayContacts() {
    if (contacts.length > 0) {
      $('.contacts_container').html(contactsList({ contacts: getContacts()}));
    } else {
      $('.contacts_container').html(noContactsHTML);
    }
    $('.display_all').hide();
  }
  
  function addSubmitListener(contact) {
     $('form').on('submit', function(e) {
      e.preventDefault();
      var name = $('#name').val();
      var phone = $('#phone').val();
      var email = $('#email').val();
      var tags = $('#tags').val().split(',').map(function(tag) {
        return tag.trim();
      });
      
      // Edit contact
      if (contact) {
        contact.name = name;
        contact.phone = phone;
        contact.email = email;
        contact.tags = tags;
        // Add new contact
      } else {
        contacts.push( Object.create(Contact).init(name, phone, email, tags));
      }
      // Update contacts in local storage
      setContacts(contacts);
      $('form').slideUp();
      displayContacts();
      $('.slide').slideDown();
      $('form').off('submit');
    });
  } 
  
   $('main').on('click', '.add', function(e) {
    e.preventDefault();
    $('.slide').slideUp(500);
    $('.add_edit_form').html(addEditTemplate({ type: 'Create', name: '', email: '', phone: ''}));
    addSubmitListener();
  });
  
  $('main').on('click', '.edit', function(e) {
    e.preventDefault();
    $('.slide').slideUp(500);
    // finds email of contact we want to edit and then searches through contacts
    // array to find contact with matching email. Uses that contact to populate
    // edit form
    var email = $(e.target).closest('.contact').find('.email').text();
    var matchingContact = contacts.filter(function(contact) {
      return contact.email === email;
    })[0];
    $('.add_edit_form').html(addEditTemplate({ type: 'Edit', name: matchingContact.name, email: matchingContact.email, phone: matchingContact.phone, tags: matchingContact.tags.join(', ')}));
    addSubmitListener(matchingContact);
  });
  
  $('main').on('click', '.delete', function(e) {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this contact?')) {
      // find matching contact index by searching email in contacts array and then 
      // deletes that contact by splice
      var email = $(e.target).closest('.contact').find('.email').text();
      var matchingContactIndex = contacts.findIndex(function(contact) {
        return contact.email === email;
      });
      contacts.splice(matchingContactIndex, 1);
      setContacts(contacts);
      // redisplay contacts list if there still are contacts, if not display
      // empty contacts HTML
      displayContacts();
    }
  });
    
  $('main').on('click', '.cancel', function(e) {
    e.preventDefault();
    $('.slide').slideDown(500);
    $('form').slideUp(500);
    $('form').off('submit');
  });
  
   $('main').on('click', '.tag', function(e) {
    e.preventDefault();
    var tag = e.target.innerHTML;
    var matchingContacts = contacts.filter(function(contact) {
      return contact.tags.indexOf(tag) >= 0;
    })
    $('.contacts_container').html(contactsList({ contacts: matchingContacts}));
    $('.display_all').show();
  });
  
  $('main').on('click', '.display_all_link', function(e) {
    e.preventDefault();
    displayContacts();
  });
  
  $('#search').on('keyup', function(e) {
    var search = ($('#search').val());
    var match = new RegExp(search, "gi");
    var matchingContacts = contacts.filter(function(contact) {
      return contact.name.match(match);
    })
    $('.contacts_container').html(contactsList({ contacts: matchingContacts}));
  })
  
})

// start with header and no contacts

// on ADD slide UP entire segment (header and no contacts) and display ADD form

//   if cancel slide DOWN header/no contacts and remove form
//   if SUBMIT change no contacts to contactsTemplate and slide DOWN header/contacts and remove form

setTimeout(function() {console.log("YES!")},0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

