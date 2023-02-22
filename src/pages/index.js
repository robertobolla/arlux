import Home from './Home';
import AboutUs from './AboutUs';
import CartelesCirculares from './CartelesCirculares';
import LonaImpresa from './LonaImpresa';
import ChapaCalada from './ChapaCalada';
import CorporeasChapa from './CorporeasChapa';
import CorporeasPolifan from './CorporeasPolifan';
import PloteoVinilo from './PloteoVinilo';
import Contact from './Contact';

const routes = [ 

  { path: '/', component: <Home />},
  { path: '/about', component: <AboutUs />}, 
  { path: '/carteles-circulares', component: <CartelesCirculares />},
  { path: '/lona-impresa', component: <LonaImpresa />},
  { path: '/chapa-calada', component: <ChapaCalada />},
  { path: '/corporea-chapa', component: <CorporeasChapa />},
  { path: '/corporea-polifan', component: <CorporeasPolifan />},
  { path: '/ploteo-vinilo', component: <PloteoVinilo />},
  { path: '/contact', component: <Contact />},
]

export default routes;