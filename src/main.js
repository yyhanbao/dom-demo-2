// jQuery(".test")
//   .find(".child")
//   .addClass("red")
//   .addClass("blue")
//   .addClass("green")
//   .end()
//   .addClass("yellow");

const x = jQuery(".test");
x.parent().print();

const $div = $("<div>1</div>");
$div.appendTo(document.body);
