/* global $ */

import React from 'react';
import './App.css';

class AddRecipe extends React.Component {
  constructor(props){
    super();
    this.handleEdit = this.handleEdit.bind(this);
  }
  
  handleEdit(){
    this.props.submitEdit();
    this.props.hideEditBox();
  }

  
  render() {
    $('#save').off();
    
    return (
      <div>
      <div className="newRecipe">
        
        <input type="text" id="dish" placeholder="Recipe name" value={this.props.title} onChange={this.props.handleTitle} />
        
        <input type="text" id="ingredients" placeholder="Ingredients, seperated by commas" value={this.props.ingredients} onChange={this.props.handleChange}/>
        
        <button id="save" onClick={this.props.handleSubmit} >Save</button>
        <button onClick={this.handleEdit}>Save Edit</button>
        
        
      </div>
      
      <button id="addNew" onClick={this.props.showEditBox} ><i className="fa fa-plus"></i></button>
      </div>
    );
  }
}

export default AddRecipe;
