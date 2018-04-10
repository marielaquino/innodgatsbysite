import React from 'react'; // importing react

class ContactForm extends React.Component {
   // create a new class, inherits from component
  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    fetch('https://untitled-7u6istdb7h9e.runkit.sh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((response) => {
      if (!response.ok) throw new Error(response);
      return response.json();
    })
    .then((response) => {
      console.log(response);
      alert('Sent successfully!');
    })
    .catch(err => console.error(err));
  }
  
  render() {
    // create render method, called when components props or state changes
    return (
      <form onSubmit={(event) => this.onSubmit(event)}>
        <label for="name">Name </label>
        <input
          type="text"
          id="name"
          onChange={(event) => this.onChange(event)}/>
        <br/>
        <label for="email">Email </label>
        <input
          type="text"
          id="Email"
          onChange={(event) => this.onChange(event)} />
        <br/>
        <label for="message">Message </label>
        <input
          type="text"
          id="message"
          onChange={(event) => this.onChange(event)}/>

        <input type="submit" value="Send message" />

      </form>


    );
  }

}

export default ContactForm // default export

// state - current components data at a certain point in time
// props - passing current component data from a parent
