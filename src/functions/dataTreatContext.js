
function dataTreatMain({drinks}) {
  if (drinks) {
    return drinks.map((item) => { 
      const {
        idDrink: id, 
        strDrink: name, 
        strDrinkThumb: image, 
        strAlcoholic: info, 
        strGlass: glass,
      } = item;
      return {id, name, image, info, glass};
    })
  } else {
    return [];
  }
}

export default dataTreatMain;
