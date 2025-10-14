import React, { Suspense } from "react";
import loadingPose from "/yoga-pose.png";

// Lazy load components
// import Hero from "./components/Hero"
const Hero = React.lazy(() => import("./components/Hero"));
const Benefits = React.lazy(() => import("./components/Benefits"));
const Instructors = React.lazy(() => import("./components/Instructors"));
const Testimonials = React.lazy(() => import("./components/Testimonials"));
const DownloadGuide = React.lazy(() => import("./components/DownloadGuide"));
const Footer = React.lazy(() => import("./components/Footer"));

// Full-page Loader
const FullPageLoader = () => (
  <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">
    <img
      src={loadingPose}
      alt="Loading Yoga Pose"
      className="w-32 h-32 animate-bounce"
    />
    <p className="text-white mt-4 text-lg">Loading...</p>
  </div>
);

function App() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Hero/>
      <Benefits />
      <Instructors />
      <Testimonials />
      <DownloadGuide />
      <Footer />
    </Suspense>
  );
}

export default App;
