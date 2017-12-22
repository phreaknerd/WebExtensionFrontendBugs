function addEvent(obj, type, fn) {
  if (obj.addEventListener)
    obj.addEventListener(type, fn, false);
  else if (obj.attachEvent)
    obj.attachEvent('on' + type, function() { return fn.apply(obj, [window.event]);});
}

addEvent(window, 'load', function(){
   addEvent(document.getElementById('changefocuslink'), 'click', function(e) {
     document.getElementById("inputfield1").focus();
   });
});
