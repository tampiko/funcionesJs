function cargaSeccion(urld, menuId) {
  var d = new Date();
  $.ajax({
    url: urld + '?idp' + d.getTime()
  }).done(function(data) {
    $("#contenidoTab").html(data);

    $(".menuTabs").removeClass("active");
    // $('li').removeClass("menuActivo");
    $("#secc_" + menuId).addClass("active");

  }).fail(function() {}).always(function() {});
}

function loadCss(url, callback) {
  var d = new Date();
  var script = document.createElement('link');
  if (script.readyState) { // IE
    script.onreadystatechange = function() {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
      var d = new Date();
    };
  } else { // Others
    script.onload = function() {
      callback();
    };
  }
  script.media_type = "text/css";
  script.rel = "stylesheet";
  script.href = url + "?fecha=" + d.getTime();
  document.getElementsByTagName('head')[0].appendChild(script);
}

function loadScript(url, callback) {
  var d = new Date();
  var script = document.createElement('script');
  if (script.readyState) { // IE
    script.onreadystatechange = function() {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
      var d = new Date();
    };
  } else { // Others
    script.onload = function() {
      callback();
    };
  }
  script.src = url + "?fecha=" + d.getTime();
  document.getElementsByTagName('head')[0].appendChild(script);
}

function cargaUrl(urld, menuId) {
  var d = new Date();
  $.ajax({
    url: urld + '?idp' + d.getTime()
  }).done(function(data) {
    $("#contenido").html(data);
    $(".dropdown").removeClass("menuActivo");
    $('li').removeClass("menuActivo");
    $("#menu_" + menuId).addClass("menuActivo");
  }).fail(function() {}).always(function() {});
}
