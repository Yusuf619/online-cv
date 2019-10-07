function myFunction() {
    var x = document.getElementById("mnavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
    /* **************************************************************************************************************************/
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("mnavbar").style.top = "0";
    } else {
      document.getElementById("mnavbar").style.top = "-100px";
    }
  }






