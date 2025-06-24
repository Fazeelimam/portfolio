import About from "./Components/About";
import ContactSec from "./Components/ContactSec";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Technologies from "./Components/Technologies";
import Workjob from "./Components/Workjob";
import WorkPro from "./Components/WorkPro";

const App = () => {
  return (
    <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen">
      {/* Background Gradient */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-0 left-0 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Workjob/>
        <WorkPro/>
        <ContactSec/>
      </div>
    </div>
  );
};

export default App;
