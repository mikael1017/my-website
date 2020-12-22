import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/header';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';


const TITLE = "Jaewoo's Website"

class App extends React.PureComponent {
  render () {
    return (
      <>
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </>
    )
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
