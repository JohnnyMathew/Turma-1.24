var sorvetes = [
    {sabor: "Chocolate", quantidade: 10},
    {sabor: "Baunilha", quantidade: 5},
    {sabor: "Morango", quantidade: 8},
    {sabor: "Limão", quantidade: 3},
    {sabor: "Coco", quantidade: 7}
];

exibirSorvetes(sorvetes);
  
function exibirSorvetes(sorvetes) {
    for (let i = 0; i < sorvetes.length; i++) {
      console.log(`Sabor: ${sorvetes[i].sabor}, Quantidade: ${sorvetes[i].quantidade}`);
    }
}
  