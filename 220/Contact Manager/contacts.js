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
  
  // var contact1 = { name: "Dan", phone: '555-6666', email: 'danny@gmail.com' }
  // var contact2 = { name: "Katie", phone: '555-8888', email: 'katie@gmail.com' }
  
  var contacts = [];
  var numContacts = contacts.length;
  var hiddenHTML = '';
  
  var Contact = {
    init: function(name, phone, email) {
      this.name = name;
      this.phone = phone;
      this.email = email;
    }
  };
  
  function addButtonEventListeners() {
    $('button .submit').on('submit', function(e) {
      e.preventDefault();
      var name = $('#name').val();
      var phone = $('#phone').val();
      var email = $('#email').val();
      contacts.push( Object.create(Contact).init(name, phone, email));
      $('form').slideUp();
      $('.main_container').html(contactsList({ contacts: contacts}));
    });
    
    $('.cancel').on('click', function(e) {
      e.preventDefault();
      console.log(hiddenHTML);
      $('form').slideUp(500);
      $('main').append(hiddenHTML);
      // $('main').html(contactsList({ contacts: contacts}));
    });
  }
  
  $('.add').on('click', function(e) {
    e.preventDefault();
    hiddenHTML = $('.slide').html();
    console.log(hiddenHTML);
    $('.slide').slideUp(500);
    $('main').append(addEditTemplate({ type: 'Create', name: '', email: '', phone: ''}));
    addButtonEventListeners();
  });
  
  $('.edit').on('click', function(e) {
    e.preventDefault();
    $('.no_contacts').slideUp();
    $('.contacts').slideUp();
  });
  
  $('.delete').on('click', function(e) {
    e.preventDefault();
    $('.no_contacts').slideUp();
    $('.contacts').slideUp();
  });
 
})