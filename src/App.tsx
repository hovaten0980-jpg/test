/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="antialiased font-sans bg-background text-primary selection:bg-rose-blush selection:text-primary">
      <Navbar />
      <Hero />
      <Problem />
      <About />
      <Products />
      <WhyChooseUs />
      <SocialProof />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  );
}
