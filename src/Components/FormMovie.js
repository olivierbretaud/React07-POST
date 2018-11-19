import React, {Component} from 'react'
import {Form, FormGroup, Input, Label} from 'reactstrap'



export default class FormMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      poster: '',
      comment:''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
  }

  onSubmit = (e) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
     };
    
    const url = "http://92.175.11.66:3001/api/quests/movies/";

    fetch(url ,config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert('Le film à été ajouté')
        }
      })
      .catch(e => {
        console.error(e);
        alert('error lors de l\'ajout du film');
      });
  }

  render() {

    return (
      <div className="form-movie">
        <Form onSubmit={this.submitForm}>
          <FormGroup>
            <legend>Envoyez votre film favori</legend>
            <div className="form-data">
              <Label htmlFor="movieName">Nom du film</Label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>

            <div className="form-data">
              <Label htmlFor="url">Url de l'affiche</Label>
              <Input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <Label htmlFor="comment">Votre commentaire</Label>
              <Input
                type="textarea"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
                className="mb-2"
              />

            </div>
            <div className="form-data">
              <Input type="submit" value="Envoyer" onClick={this.onSubmit}/>
            </div>
          </FormGroup>

        </Form>
        

      </div>
    )
  }
}

