import React from 'react'

import LandingPage from './stores/pages/LandingPage';
import { Routes,Route } from 'react-router-dom';
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import WatchPage from './stores/pages/WatchPage';
import MenPage from './stores/pages/MenPage';
import WomanPage from './stores/pages/WomanPage';
import BookPage from './stores/pages/BookPage';
import FurniturePage from './stores/pages/FurniturePage';
import AcPage from './stores/pages/AcPage';
import KitchenPage from './stores/pages/KitchenPage';
import FridgePage from './stores/pages/FridgePage';
import SpeakerPage from './stores/pages/SpeakerPage';
import TvPage from './stores/pages/TvPage';
import MobileSingle from './singles/MobileSingle';
import ComputerSingle from './singles/ComputerSingle';
import WatchSingle from './singles/WatchSingle';
import MenSingle from './singles/MenSingle';
import WomanSingle from './singles/WomanSingle';
import BookSingle from './singles/BookSingle';
import FurnitureSingle from './singles/FurnitureSingle';
import AcSingle from './singles/AcSingle';
import KitchenSingle from './singles/KitchenSingle'
import FridgeSigle from './singles/FridgeSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import TvSingle from './singles/TvSingle'
import Cart from './singles/Cart';
import Login from './stores/components/Login';
import Signup from './stores/components/Signup';
import TodayOffers from './stores/pages/TodayOffers';
import SpecialOffer from './singles/SpecialOffer';

const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/landing' element={<LandingPage/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/computers' element={<ComputerPage/>}/>
        <Route path='/watches' element={<WatchPage/>}/>
        <Route path='/men' element={<MenPage/>}/>
        <Route path='/woman' element={<WomanPage/>}/>
        <Route path='/books' element={<BookPage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/ac' element={<AcPage/>}/>
        <Route path='/Kitchen' element={<KitchenPage/>}/>
        <Route path='/fridge' element={<FridgePage/>}/>
        <Route path='/speakers' element={<SpeakerPage/>}/>
        <Route path='/tv' element={<TvPage/>}/>
        <Route path='/special' element={<TodayOffers/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>
          <Route path='/mobiles/:id' element={<MobileSingle/>}/>
          <Route path='/computers/:id' element={<ComputerSingle/>}/>
          <Route path='/watches/:id' element={<WatchSingle/>}/>
          <Route path='/men/:id' element={<MenSingle/>}/>
          <Route path='/woman/:id' element={<WomanSingle/>}/>
          <Route path='/books/:id' element={<BookSingle/>}/>
          <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
          <Route path='/ac/:id' element={<AcSingle/>}/>
          <Route path='/Kitchen/:id' element={<KitchenSingle/>}/>
          <Route path='/fridge/:id' element={<FridgeSigle/>}/>
          <Route path='/speakers/:id' element={<SpeakerSingle/>}/>
          <Route path='/tv/:id' element={<TvSingle/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/special/:id' element={<SpecialOffer/>}/>

      </Routes>
    </div>
  )
}

export default App
