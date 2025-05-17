import AboutMe from "@/components/ui/aboute-me";
import AsSeenIn from "@/components/ui/as-seen-in";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import LatestAndGreatest from "@/components/ui/latest-and-greatest";
import SocialEmailSignup from "@/components/ui/subscribe";
import Tagline from "@/components/ui/tagline";


export default function Home() {
  return (
    <div className="">
      <Tagline />
      <Hero />
      <AsSeenIn />
      <LatestAndGreatest />
      <AboutMe />
      {/* <SocialEmailSignup/> */}
      <Footer/>
    </div>
  );
}


