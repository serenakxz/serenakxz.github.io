// when clicking + or ☰ button
$("slider").click(function(){
    // when clicking ☰ button, open nav
    if($("title").hasClass("open")){
      toggleNav();
    }
    // when clicking + button, open header
    else{
      $("title").addClass("open");
    }
  });