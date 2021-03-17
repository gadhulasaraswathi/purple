import React from 'react'
import './App.css';
import NavigationBar from './components/navigationbar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidenav from './components/sidenav/sidenav';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'
import homepage from './components/home/homepage';
import Product from './components/products/Product';
import Feature from './components/feature/Feature';
import Price from './components/price/Price';
import TablePage from './components/tablepage/TablePage';
import AddPage from './components/addpage/AddPage';
import Edit from './components/edit/Edit';
import { Toggle } from './components/Toggle';
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import View from './components/view/View';

const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;



function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
  <Router>
     <Sidenav/>
     <NavigationBar/>
     <Edit/>
     
     <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        
        
      </Container>
    </ThemeProvider>
     <Switch>
       <Route path="/view" component={View}/>
       <Route path="/homepage" component={homepage}/>
       <Route path="/Product" component={Product}/>
       <Route path="/feature" component={Feature}/>
       <Route path="/price" component={Price}/>
       <Route path="/tablepage" component={TablePage}/>
       <Route path="/addpage" component={AddPage}/>




     </Switch>
  </Router>
   
 
  )
}

export default App;

