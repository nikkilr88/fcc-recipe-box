import React from 'react';
import './App.css';

class RecipeBox extends React.Component {
  constructor(props) {
    super();
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }
  
  deleteRecipe(el) {
    var value = el.target.parentNode.getAttribute("id")
    console.log(value)
    this.props.handleDelete(value);
  }
  
  render() {
  const recipes = this.props.recipes.map( (recipe, i) => {
    return <li  key={i} id={i}><span className="title">{recipe.title}</span><ul className="ingredients">{recipe.ingredients.map(function(item,i){return <li key={i}>{item}</li>})}</ul><button onClick={this.deleteRecipe}>X</button></li>
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