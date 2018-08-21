import React, { Component } from "react";
import API from "../../utils/API";
import categories from "../../utils/Categories";
import { Row, Input } from 'react-materialize';

class SuggestionForm extends Component {
  state = {
    suggestionTitle: "",
    suggestionBody: "",
    gistCategory: ""
  };

  componentDidMount() {
    const selects = document.querySelectorAll('select');
    for (var i = 0; i < selects.length; i++) {
      window.M.FormSelect.init(selects[i]);
    }
  }

  handleChange = event => {
    this.setState({ gistCategory: event.target.value });
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event, data) => {
    event.preventDefault();
    if (
      !this.state.suggestionBody &&
      !this.state.suggestionTitle &&
      !this.state.gistCategory
    ) {
      alert("All fields need to be field out");
    }
    API.createSuggestion({
      title: this.state.suggestionTitle,
      suggestion: this.state.suggestionBody,
      category: this.state.gistCategory,
      author: '59a4d24202f62ef3b2d3dafc'
    });
    this.setState({ suggestionTitle: "" });
    this.setState({ suggestionBody: "" });
    this.setState({ gistCategory: "" });
  };
  render() {
    console.log(categories, this.state.gistCategory);
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                name="suggestionTitle"
                type="text"
                value={this.state.suggestionTitle}
                onChange={this.handleInputChange}
              />
              <label htmlFor="gist title">Suggestion Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="suggestionBody"
                className="materialize-textarea"
                value={this.state.suggestionBody}
                onChange={this.handleInputChange}
              />
              <label htmlFor="gist body">Suggestion Content</label>
            </div>
          </div>
          <Row>
            <Input
              s={6}
              type="select"
              label="Select A Category"
              value={this.state.gistCategory}
              onChange={this.handleChange}
            >
              <option value="" disabled>
                Choose a Category
              </option>
              {categories.map(category => {
                return (
                  <option
                    data-id={category.id}
                    key={category.id}
                    value={category.id}
                  >
                    {category.label}
                  </option>
                );
              })}
            </Input>
          </Row>
          <button
            className="btn waves-effect waves-light right"
            type="submit"
            name="action"
            onClick={this.handleFormSubmit}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default SuggestionForm;
