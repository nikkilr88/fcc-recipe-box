import React from 'react';
import './App.css';

class RecipeBox extends React.Component {
  constructor(props) {
    super();
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }
  
  deleteRecipe(el) {
    var value = el.target.parentNode.getAttribute("id");
    console.log(value)
    this.props.handleDelete(value);
  }
  
  render() {
  const recipes = this.props.recipes.map( (recipe, i) => {
    return <li  key={i} id={i}><span className="title">{recipe.title}</span><ul className="ingredients">{recipe.ingredients.map(function(item,i){return <li key={i}>{item}</li>})}</ul><input type="button" onClick={this.deleteRecipe} value="&#xf014;"/></li>
		});
    return (
      <ul className="recipe">
        {recipes}
        <li><span className="title">Pizza</span> <ul className="ingredients"><li>crust</li><li>sauce</li><li>cheese</li><li>toppings</li></ul></li>
      </ul>
    );
  }
}

export default RecipeBox;