import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Landing from './Components/LandingPage/Landing'
import Category from './Components/CategoryPage/Category'


import Header from './Components/LandingPage/Header.js'
import Navbar from './Components/LandingPage/Navbar.js'




class App extends React.Component {

  render(){

    return (
      <BrowserRouter>
        <div>
            <Header />
            <Navbar />

            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/Category' component={Category} />
            </Switch>
            
        </div>

      </BrowserRouter>
    )
  }



}

export default App;
