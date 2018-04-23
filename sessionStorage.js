if (window.sessionStorage) {
  sessionStorage.setItem("nombre", "pepe");
  var nombre = sessionStorage.getItem("nombre");
  sessionStorage.removeItem("nombre");
  console.log('Tu Browser SI soporta LocalStorage!');
} else {
  throw new Error('Tu Browser NO soporta LocalStorage!');
}

function salirSistema() {
  sessionStorage.clear();
  $("#elNavBar").hide();
  $("#menu_PSI").hide();
  $("#menu_PDG").hide();
  $("#menu_TS").hide();
  location.reload(true);
}
