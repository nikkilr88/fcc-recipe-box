/* global $ */

import React from 'react';
import './App.css';

class RecipeBox extends React.Component {
  constructor(props) {
    super();
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }
  
   componentDidMount() {
    $('.recipe').on('click','.title', function() {
      $(this).parent().find('.ingredients').css('display') === 'none' ?
      $(this).parent().find('.ingredients').show(100) : $(this).parent().find('.ingredients').hide(100)
    });
  }
  
  deleteRecipe(el) {
    var value = el.target.parentNode.getAttribute("id");
    console.log(value)
    this.props.handleDelete(value);
  }
  
  render() {
  const recipes = this.props.recipes.map( (recipe, i) => {
    return <li  key={i} id={i}><span className="title">{recipe.title}<input class="del" type="button" onClick={this.deleteRecipe} value="&#xf014;"/><input class="edit" type="button" value="Edit" /></span><ul className="ingredients">{recipe.ingredients.map(function(item,i){return <li key={i}>{item}</li>})}</ul></li>
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