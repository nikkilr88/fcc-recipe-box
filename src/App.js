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
  }
  
  componentDidMount() {
    $('.recipe').on('click','.title', function() {
      $(this).parent().find('.ingredients').css('display') === 'none' ?
      $(this).parent().find('.ingredients').show(100) : $(this).parent().find('.ingredients').hide(100)
    });
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
		
		$('#dish').val('');
    $('#ingredients').val('');
	}
  
  handleDelete(text) {
    var updatedRecipes = this.state.recipes;
    updatedRecipes.splice(updatedRecipes.indexOf(text), 1);
    this.setState({
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
        />
        <RecipeBox 
          title={this.state.title} 
          ingredients={this.state.ingredients} 
          recipes={this.state.recipes}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
