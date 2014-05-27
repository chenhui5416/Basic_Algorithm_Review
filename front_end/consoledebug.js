(function() {
  var myList = new Object();
  var item   = new Object();
  item.text  = "item-1";
  myList[3]  = item;
  
  console.log(myList);
  console.log(myList[3].text);
  
  // Assign another object to the same entry
  var item2   = new Object();
  item2.text  = "item-2";
  myList[3]  = item2;
  
  console.log(myList);
  console.log(myList[3].text);
})();