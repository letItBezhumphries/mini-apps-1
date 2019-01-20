
function ProductsPage(props) {
  return (
      <div>
        <h4>If you would like to purchase this item, click Checkout!</h4>  
        <br/> 
        <button onClick={props.handleFormNext}> Checkout </button>
      </div> 
  );
}


function UserLoginForm(props) {
  const { handleFormNext, handleFormPrev, handleInputChange } = props;
  return (
    <form id="user-form" name="user-form" encType="multipart/form-data" method="post" onSubmit={handleFormNext}>
      <label>
        Name: <input name="name" type="text" onChange={handleInputChange}/>
      </label>
      <br/>
      <label>
        Email: <input name="email" type="email" onChange={handleInputChange}  />
      </label>
      <br/>
      <label>
        Password: <input name="password" type="text" onChange={handleInputChange}  />
      </label>
      <br/>
      <button onClick={handleFormPrev} value="prev"> Prev </button>
      <input type="submit" value="next"></input>
    </form>
  );
}

function ShippingForm(props) {
  const { handleFormNext, handleFormPrev, handleInputChange } = props;
  return (
    <div>
      <form name="shipping-form" encType="multipart/form-data" method="post" onSubmit={handleFormNext} >
        <label>
          Address: <input type="text" name="address" onChange={handleInputChange} />
        </label>
        <br/>
        <label>
          Suite#: <input type="text" name="suite" onChange={handleInputChange} />
        </label>
        <br/>
        <label>   
          City: <input type="text" name="city" onChange={handleInputChange} />
        </label>
        <br/>
        <label>  
          State: <input type="text" name="state" onChange={handleInputChange} />
        </label>
        <br/>
        <label>
          Zip: <input type="number" name="zip" onChange={handleInputChange} />
        </label>
        <br/>
        <label>
          Telephone#: <input type="number" name="phone#" onChange={handleInputChange} />
        </label>
        <br/>
        <button onClick={handleFormPrev} value="prev"> Prev </button>
        <input type="submit" value="next"></input>
      </form>
    </div>
  );
}

function BillingForm(props) {
  const { handleFormNext, handleFormPrev, handleInputChange } = props;
  return (
    <div>
      <form name="billing-form" encType="multipart/form-data" method="post" onSubmit={handleFormNext}>
        <label>
          credit card#: <input name="card" type="text" onChange={handleInputChange} />
        </label>
        <br/>
        <label>   
          exp date: <input type="text" name="expiry" onChange={handleInputChange} />
        </label>
        <br/>
        <label>  
          cvv: <input type="number" name="cvv" onChange={handleInputChange} />
        </label>
        <br/>
        <label>
          billing zip: <input type="number" name="billing_zip" onChange={handleInputChange} />
        </label>
        <br/>
          <button onClick={handleFormPrev} value="prev"> Prev </button>
          <input type="submit" value="next"></input>
      </form>
    </div>
  );
}

function ConfirmationPage(props) {
  return (
    <div> 
     <h3>Please confirm your information is accurate:</h3>        


      
      <button className="purchase" type="submit" value="submit">Purchase Item!</button>
    </div>
  )
}
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      step: 0,
      isAuth: false    
    };
    this.handleInputChange = this.handleInputChange.bind(this);    
    this.handleFormNext = this.handleFormNext.bind(this);
    this.handleFormPrev = this.handleFormPrev.bind(this);
    // this.handleAuthorizingUser = this.handleAuthorizingUser.bind(this);
  }

  handleFormNext(event) {
    event.preventDefault();
    if(this.state.step > 0) {
      //grab the data from the submitted
      var userData = new FormData(event.target);
      console.log(userData);
      fetch('/', {
        method: 'POST',
        body: userData
      });
    }
    if(this.state.step === 4) {
      this.setState({
        step: 0
      });
    } else { 
      this.setState({
        step: this.state.step += 1
    })
    console.log(this.state.step);
    }
  }

  handleFormPrev(event) {
    event.preventDefault()
    this.setState({
      step: this.state.step -= 1
    });
    console.log(this.state.step);
  }

  handleInputChange(event) {
    const { name, value } = this.state;
    this.setState({
      [name]: value
    });
  }

  // handleAuthorizingUser(event) {
  //   const { name, email, password, isAuth } = this.state;
  //   let user = JSON.stringify(this.state);
  //   $.post('/user', user, (res) => {
  //     console.log('I ve been sent to the server');
  //   })

  // }
  

  render() {
    if (this.state.step === 0) {
      return <ProductsPage handleFormNext={this.handleFormNext} />
    }
    if (this.state.step === 1) {
      return <UserLoginForm handleFormNext={this.handleFormNext} handleFormPrev={this.handleFormPrev} />
    }
    if (this.state.step === 2) {
      return <ShippingForm handleFormNext={this.handleFormNext} handleFormPrev={this.handleFormPrev} />
    }
    if (this.state.step === 3) {
      return <BillingForm handleFormNext={this.handleFormNext} handleFormPrev={this.handleFormPrev} />
    }
    if (this.state.step === 4) {
      return <ConfirmationPage />
    }
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));