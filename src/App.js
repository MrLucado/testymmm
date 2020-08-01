import React from 'react';
import './App.css';


//const {apiKey} = 'f3ae96fe-dca8-41a5-a6a9-74fe7303b53c';
const api = 'https://fnbr.co/api/shop?';

class shopItems extends React.Component {
  constructor() {
    super();
    this.state = {
      daily: [],
      featured: [],
      loaded: false,
    };
  }

  componentDidMount() {
    // Fetching from fnbr.co
    fetch(api, {headers: {"x-api-key": "f3ae96fe-dca8-41a5-a6a9-74fe7303b53c"}})
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          daily: result.data.daily,
          featured: result.data.featured,
        })
      // Loading Screen
      setTimeout(
        function() {
          this.setState({loaded: true});
        }.bind(this), 2500
      )
      }
    )  
  }

  // Function for background visualization of items
  // eslint-disable-next-line
  rarityChecker(rarity) {
    // eslint-disable-next-line default-case
    switch(rarity) 
    {
      case "uncommon":
        return {background: "green"}; 
      case "rare":
        return {background: "blue"};
      case "epic":
        return {background: "purple"};
      case "legendary":
         return {background: "yellow",};            
    }
  }

  render() {
    const {daily, featured, loaded} = this.state; 
    if(!loaded) {
      return (
        <div className="container">
          <div className="center-transform">&nbsp;
            <h1><span>Loading.....</span></h1>
            
            
          </div>
        </div>
      )     
    }
    else {
      return (
        <div className="container">  
        <div className="title1"><a href="https://glexservices.com">GlexServices.com</a></div>      
          <ul className="grid">
          
            <div className="title">Featured Items</div>
            {daily.map(item => (
              <li className="card" style={this.rarityChecker(item.rarity)} key={item.name}>
                <div className="card__img">
                  <img src={item.images.icon} alt="item-icon"/>
                </div>
                <div className="card__desc">
                  <p>{item.name}</p>   
                </div>   
                <div className="card__desc__vbucks">   
                  <img src={item.priceIconLink} alt="vbucks-icon"/>
                  <p>{item.price}</p>   
                </div>
              </li>
            ))}       
            <div className="title">Daily Items</div>
            {featured.map(item => (
              <li className="card" style={this.rarityChecker(item.rarity)} key={item.name}>
                <div className="card__img">
                  <img src={item.images.icon} alt="item-icon"/>
                </div>
                <div className="card__desc">
                  <p>{item.name}</p>   
                </div>   
                <div className="card__desc__vbucks">   
                  <img src={item.priceIconLink} alt="vbucks-icon"/>
                  <p>{item.price}</p>   
                </div>           
              </li>
            ))}
            <div className="title"><a href="https://twitter.com/JacobLucado" target="_about">Code Jacob-Lucado</a></div>
            <div className="title"><a href="https://twitter.com/GlexServicess" target="_about">Code Glex</a></div>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </ul>
        </div>
        
            
          
        
      )
    }
  }
}

export default shopItems;
