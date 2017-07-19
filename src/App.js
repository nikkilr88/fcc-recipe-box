/* global $ */

import React from 'react';
import './App.css';
import AddRecipe from './AddRecipe';
import RecipeBox from './RecipeBox';

class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
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
    this.submitEdit = this.submitEdit.bind(this);
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
    var index = this.state.index;
    this.setState({
      index: e.target.parentNode.getAttribute("id"),
      title: this.state.recipes[index].title,
      ingredients: this.state.recipes[index].ingredients
    });
  }
  
  submitEdit(){
    var index = this.state.index;
    console.log(typeof this.state.ingredients);
    var updatedRecipes = this.state.recipes;
    updatedRecipes[index].title=this.state.title;
    
    if(typeof this.state.ingredients === "string") {
      updatedRecipes[index].ingredients=this.state.ingredients.split(',');
    } else {
      updatedRecipes[index].ingredients=this.state.ingredients;
    }

    this.setState({
      title: '',
      ingredients: '',
      recipes: updatedRecipes
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
          submitEdit={this.submitEdit}

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
