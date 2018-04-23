function pintaNavBar() {
  $("#elNavBar").show();
  $("#menu_PSI").hide();
  $("#menu_PDG").hide();
  $("#menu_TS").hide();
  switch (sessionStorage.getItem('usu_rol_nombre')) {
    case 'TRABAJO SOCIAL':
      $("#menu_TS").show();
      break;
    case 'PEDAGOGIA':
      $("#menu_PDG").show();
      break;
    case 'PSICOLOGIA':
      $("#menu_PSI").show();
      break;
  }
  $("#contenido").html('');
}
