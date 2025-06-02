import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TokenJourney from '@/components/TokenJourney';
import PumpWithFun from '@/components/PumpWithFun';
import UserGroups from '@/components/UserGroups';
import MorePowers from '@/components/MorePowers';
import Tokenomics from '@/components/Tokenomics';
import FAQ from '@/components/FAQ';
import SpaceshipComponent from '@/components/SpaceshipComponent';
import Footer from '@/components/Footer';

export default function Home(): React.JSX.Element {
  return (
    <>
      <SpaceshipComponent />
      <Header />
      <Hero />
      <TokenJourney />
      <PumpWithFun />
      <UserGroups />
      <MorePowers />
      <Tokenomics />
      <FAQ />
      <Footer />
    </>
  );
}
