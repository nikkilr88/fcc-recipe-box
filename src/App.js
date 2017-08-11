/* global $ */
/* global localStorage */

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
      recipes: localStorage.getItem("recipes") === null ? [] : JSON.parse(localStorage.getItem("recipes"))
    };
    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }
  
  componentDidMount(){
    //localStorage.removeItem("recipes");
    //console.log(JSON.parse(localStorage.getItem("recipes")));
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
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes))
    this.setState({
			title: '',
      ingredients: '',
      recipes: JSON.parse(localStorage.getItem("recipes"))
		});
		
		console.log(this.state.recipes)
		
		$('#dish').val('');
    $('#ingredients').val('');
    this.hideEditBox();
	}
  
  handleDelete(value) {
    var updatedRecipes = this.state.recipes;
    updatedRecipes.splice(value, 1);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    this.setState({
      recipes: JSON.parse(localStorage.getItem("recipes"))
    });
  }
  
  handleEdit(index) {
    this.setState({
      index: index,
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
    
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    this.setState({
      title: '',
      ingredients: '',
      recipes: JSON.parse(localStorage.getItem("recipes"))
    });

  }
  showEditBox() {
    $('.newRecipe').show("slow");
  }
  
  hideEditBox() {
    $('.newRecipe').hide("slow");
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
          showEditBox={this.showEditBox}
          hideEditBox={this.hideEditBox}

        />
        <RecipeBox 
          title={this.state.title} 
          ingredients={this.state.ingredients} 
          recipes={this.state.recipes}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          showEditBox={this.showEditBox}
          hideEditBox={this.hideEditBox}
        />
      </div>
    );
  }
}

export default App;
