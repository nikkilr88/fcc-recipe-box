import React from 'react';
import './App.css';

class RecipeBox extends React.Component {
  constructor(props) {
    super();
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }
  
  deleteRecipe(el) {
    var value = el.target.parentNode.querySelector('span').innerText;
    this.props.handleDelete(value);
  }
  
  render() {
  const recipes = this.props.recipes.map( (recipe, i) => {
    return <li  key={i}><span className="title">{recipe.title}</span><span className="ingredients">{recipe.ingredients.map(function(item){return <li>{item}</li>})}</span><button onClick={this.deleteRecipe}>X</button></li>
		});
    return (
      <ul className="recipe">
        {recipes}
        <li><span className="title">Pizza</span><span className="ingredients"> <ul><li>crust</li><li>sauce</li><li>cheese</li><li>toppings</li></ul></span></li>
      </ul>
    );
  }
}

export default RecipeBox;