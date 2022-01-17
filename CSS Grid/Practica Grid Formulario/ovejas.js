const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
  ]

  function contarOvejas(ovejas) {

    const ovejas1 = ovejas.filter(({name, color }) => name.includes('a','A','n', 'N') &&  color === 'rojo' )

    return ovejas1
  }

  const ovejasFiltradas = contarOvejas(ovejas) 
  console.log(ovejasFiltradas);