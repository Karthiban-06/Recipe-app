function filterRecipes(type) {
    const recipeCards = document.querySelectorAll('.recipe-card');
  
    recipeCards.forEach(card => {
      if (type === 'all' || card.dataset.type === type) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }