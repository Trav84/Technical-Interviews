/*
 * QUESTION 1:
 * How could you rewrite the following to make it shorter?
 */
if (foo) {
  bar.doSomething(el);
} else {
  bar.doSomethingElse(el);
}

/*
 * QUESTION 2:
 * What is the faulty logic in the following code?
 */
var foo = 'hello';
 
(function() {
  var foo = foo || 'world';
  console.log(foo);
})();

/* QUESTION 3:
 * Given the following code, how would you override the value of the bar
 * property for the variable foo without affecting the value of the bar
 * property for the variable bim? how would you affect the value of the bar
 * property for both foo and bim? how would you add a method to foo and bim to
 * console.log the value of each object's bar property? how would you tell if
 * the object's bar property had been overridden for the particular object?
 */
var Thinger = function() {
  return this;
};
 
Thinger.prototype = {
  bar : 'baz'
};
 
var foo = new Thinger(),
    bim = new Thinger();

/*
 * QUESTION 4:
 * Given the following code, and assuming that each defined object has a
 * 'destroy' method, how would you destroy all of the objects contained in the
 * myObjects object?
 */
var myObjects = {
  thinger : new myApp.Thinger(),
  gizmo : new myApp.Gizmo(),
  widget : new myApp.Widget()
};


/*
 * QUESTION 5:
 * Given the following array, create an array that contains the contents of
 * each array item repeated three times, with a space between each item. so,
 * for example, if an array item is 'foo' then the new array should contain an
 * array item 'foo foo foo'. (you can assume the library of your choice is
 * available)
 */
var myArray = [ 'foo', 'bar', 'baz' ];


/*
 * QUESTION 6:
 * How could you improve the following code?
 */
$(document).ready(function() {
  $('.foo #bar').css('color', 'red');
  $('.foo #bar').css('border', '1px solid blue');
  $('.foo #bar').text('new text!');
  $('.foo #bar').click(function() {
    $(this).attr('title', 'new title');
    $(this).width('100px');
  });
  
  $('.foo #bar').click();
});


/*
 * QUESTION 7:
 * What issues do you see with the following code? how would you fix it?
 */
(function() {
  var foo;
 
  dojo.xhrGet({
    url : 'foo.php',
    load : function(resp) {
      foo = resp.foo;
    }
  });
 
  if (foo) {
    // run this important code
  }
})();


/*
 * QUESTION 8: 
 * How could you rewrite the following code to make it shorter?
 */
(function($){
  $('li.foo a').attr('title', 'i am foo');
  $('li.bar a').attr('title', 'i am bar');
  $('li.baz a').attr('title', 'i am baz');
  $('li.bop a').attr('title', 'i am bop');
})(jQuery);


/*
 * QUESTION 9:
 * How would you improve the following code?
 */
for (i = 0; i <= 100; i++) {
  $('#thinger').append('<p><span class="thinger">i am thinger ' + i + '</span></p>');
  $('#gizmo').append('<p><span class="gizmo">i am gizmo ' + i + '</span></p>');
}


/*
 * QUESTION 10:
 * A user enters their desired tip into a text box; the baseTotal, tax,
 * and fee values are provided by the application. what are some potential
 * issues with the following function for calculating the total?
 */
function calculateTotal(baseTotal, tip, tax, fee) {
  return baseTotal + tip + tax + fee;
}


/*
 * QUESTION 11: 
 * Write code such that the following alerts "Hello World"
 */
say('Hello')('World');