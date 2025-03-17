import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import Postlist from './components/PostList';


function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (

    <div className='app_container'>
      < Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
      <div className=' content'>

        <Header />
        {selectedTab === "Home" ? (<Postlist />) : (<CreatePost />)}


        <Footer />
      </div>
    </div>




  );
}

export default App;
