import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { PrimaryFeatures } from './components/PrimaryFeatures';

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <PrimaryFeatures />
                <Pricing />
            </main>
            <Footer />
        </>
    );
}

export default App;
