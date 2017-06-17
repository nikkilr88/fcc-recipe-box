/* global $ */

import React from 'react';
import './App.css';

class AddRecipe extends React.Component {
  render() {
    $('#save').off();
    
    return (
      <div className="newRecipe">
        
        <input type="text" id="dish" placeholder="Recipe name" value={this.props.title} onChange={this.props.handleTitle} />
        
        <input type="text" id="ingredients" placeholder="Ingredients, seperated by commas" value={this.props.ingredients} onChange={this.props.handleChange}/>
        
        <button id="save" onClick={this.props.handleSubmit} >Save</button>
        
      </div>
    );
  }
}

export default AddRecipe;
