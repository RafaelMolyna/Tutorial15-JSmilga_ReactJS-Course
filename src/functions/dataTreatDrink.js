
function dataTreatDrink (data) {
  if ( data.drinks ) {
    const {
      strDrink: name,
      strDrinkThumb: image,
      strAlcoholic: info,
      strCategory: category,
      strGlass: glass,
      strInstructions: instructions,
    } = data.drinks[0]

    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      const ing = data.drinks[0][`strIngredient${i}`];
      if (ing) {
        ingredients.push(ing)
      }
    }
    const drink = {name, image, info, category, glass, instructions, ingredients};
    return drink;
    
  } else {
    return null
  }
}

export default dataTreatDrink
