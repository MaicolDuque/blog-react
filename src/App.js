import React from 'react';
import './assets/css/App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      

      <div class="center">
        <section id="content">

        </section>
        <Sidebar />
        <div className="clearfix"></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;


