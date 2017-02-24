// var invoice = {
//   phone: 3000,
//   internet: 6500,
// };
// var payment = {
//   phone: 1300,
//   internet: 5500,
// };
// var invoiceTotal = invoice.phone + invoice.internet;
// var paymentTotal = payment.phone + payment.internet;
// var remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // 6800
// console.log(remainingDue);         // 2700

function createInvoice(services) {
  // implement the factory function here
  var invoice = {};
  invoice.phone = services ? services.phone || 3000 : 3000;
  invoice.internet = services? services.internet || 5500 : 5500;
  invoice.payments = 0;
  invoice.total = function() {
    return this.phone + this.internet;
  };
  invoice.addPayment = function(payment) {
    this.payments += payment.total();
  };
  invoice.addPayments = function(payments) {
    this.payments += paymentTotal(payments);
  };
  invoice.amountDue = function() {
    return this.total() - this.payments;
  };
  
  return invoice;
}

function invoiceTotal(invoices) {
  var total = 0;
  for (var i = 0; i < invoices.length; i++) {
    total += invoices[i].total();
  }

  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
 internet: 6500
}));

invoices.push(createInvoice({
 phone: 2000
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoices);

console.log(invoiceTotal(invoices));             // 31000

// var invoice1 = createInvoice({phone: 2200});
// var invoice2 = createInvoice();

// console.log(invoice1.total());
// console.log(invoice2.total());

function createPayment(services) {
  services = services || {};
  var payments = {};
  payments.phone = services.phone || 0;
  payments.internet = services.internet || 0;
  
  payments.total = function() {
    return services.amount || this.phone + this.internet;
  };
  
  return payments;
}

function paymentTotal(payments) {
  var total = 0;
  for (var i = 0; i < payments.length; i++) {
    total += payments[i].total();
  }

  return total;
}

var payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500
}));

payments.push(createPayment({
  phone: 2000
}));

payments.push(createPayment({
  phone: 1000, internet: 4500
}));

payments.push(createPayment({
  amount: 10000
}));

console.log(payments);
console.log(paymentTotal(payments));

var invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

var payment1 = createPayment({
  amount: 2000,
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

var payment3 = createPayment({
  phone: 500
});

console.log(payment2);

invoice.addPayment(payment1)
invoice.addPayments([payment2, payment3]);
invoice.amountDue();       // this should return 0