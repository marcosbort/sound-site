import './App.css';
import "antd/dist/antd.css"
import { AppHeader } from './components/Header-Antd';
import { AppHero } from './components/Hero-Antd';
import { AppAbout } from './components/About-Antd';
import { AppCards } from './components/Cards-Antd';
import { AppModal } from './components/VideoModalParallax-Antd';
import { AppPrices } from './components/Prices-Antd';
import { AppContact } from './components/Contact-Antd';
import { AppFooter } from './components/Footer-Antd';


function App() {

  return (
    <div className="App">
      <AppHeader />
      <AppHero />
      <AppAbout />
      <AppCards />
      <AppModal />
      <AppPrices />
      <AppContact />
      <AppFooter />

    </div>
  );
}
export default App;
