//implemento de condicional em menu
var menuSelecionado = "Home";
switch (menuSelecionado) {
  case "home":
    console.log(`você clicou no link Home`);
    break;
  case "Quem somos":
    console.log(`você clicou no link Quem Somos`);
    break;
  case "contato":
    console.log(`você clicou no link contato`);
    break;

  default:
    console.log(`Opção inválida`);
    break;
}

var mes = 2;
switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log(`primeiro trimestre`);
    break;
  case 4:
  case 5:
  case 6:
    console.log(`segundo trimestre`);
    break;
  case 7:
  case 8:
  case 9:
    console.log(`terceiro trimestre`);
    break;
  case 10:
  case 11:
  case 12:
    console.log(`quarto trimestre`);

  default:
    console.log(`mês inválido`)
    break;
}
