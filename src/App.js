/* global $ */

import React from 'react';
import './App.css';
import AddRecipe from './AddRecipe';
import RecipeBox from './RecipeBox';


class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: '',
      ingredientsArr: [],
      recipes: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  
  handleChange(e) {
		this.setState({
			ingredients: e.target.value
		});
    const itemsArray = e.target.value.split(',');
		this.setState({
			ingredientsArr: itemsArray
		});
	}
  
  handleTitle(e) {
    this.setState({
			title: e.target.value
		});
  }
  
  handleSubmit() {
    var updatedRecipes = this.state.recipes;
    updatedRecipes.unshift({title: this.state.title, ingredients: this.state.ingredientsArr});
  
    this.setState({
			title: '',
      ingredients: '',
      recipes: updatedRecipes
		});
		
		console.log(this.state.recipes)
		
		$('#dish').val('');
    $('#ingredients').val('');
	}
  
  handleDelete(value) {
    var updatedRecipes = this.state.recipes;
    delete updatedRecipes[value];
    this.setState({
      recipes: updatedRecipes
    });
  }
  
  handleEdit(e) {
    var value = e.target.parentNode.getAttribute("id");
    console.log(value);
    this.setState({
      title: this.state.recipes[value].title,
      ingredients: this.state.recipes[value].ingredients
    });
  }
  
  render() {
    return (
      <div>
        <AddRecipe 
          ingredients={this.state.ingredients} 
          title={this.state.title}
          handleChange={this.handleChange} 
          handleTitle={this.handleTitle}
          handleSubmit={this.handleSubmit}
        />
        <RecipeBox 
          title={this.state.title} 
          ingredients={this.state.ingredients} 
          recipes={this.state.recipes}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
