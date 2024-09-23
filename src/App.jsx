import { Banner } from './components/Banner';
import { Footer } from './components/Footer/Footer';
import { Header } from "./Components/Header/Header";

export function App() {
  return (
    <div className="layout">
      <Header />
      <Banner />
      <Footer />
    </div>
  )
};

