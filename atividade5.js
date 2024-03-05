//01
function idadecalculada(anonas) {
  return 2024 - anonas;
}
console.log(`você tem ${idadecalculada(2001)} anos`);
//02
console.log(
  "====================================================================="
);
function kmsrodados(combustivel) {
  let desempenho = 12;
  return combustivel * desempenho;
}
console.log(
  `Um carro com 5 litros de combustivel pode fazer ${kmsrodados(5)}km`
);
console.log(
  "====================================================================="
);

function voto(idade) {
  if (voto < 16) {
    console.log(`você não pode votar`);
  } else if (idade >= 16 && idade < 18)
    console.log(`você pode votar, mas não é obrigatorio`);
  else console.log(`você não pode votar`);
}
voto(20);

console.log(
  "====================================================================="
);

function votação(idade2) {
  switch (true) {
    case idade2 <= 15:
      console.log(`você não pode votar`);
      break;
    case idade2 >= 16 && idade2 < 18:
      console.log(`Você pode votar, mas não é obrigatorio`);
      break;
    case idade2 >= 18 && idade2 < 84:
      console.log(`Você é obrigado a votar `);
      break;
    case idade2 >= 85:
      console.log(`você não e obrigado a votar`);
      break;

    default:
      break;
  }
}
votação(18);
