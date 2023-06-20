import { Suspense, lazy } from "react";
import ScrollToTopButton from "./pages/ScrollUp";
import About from "./about";
// import ContactUs from "./pages/contactus";
// import Content from "./pages/content";
// import Footer from "./pages/Footer/index";

function App() {
  const Contentpage = lazy(() => import("./pages/content"));
  const FooterPage = lazy(() => import("./pages/Footer/index"));
  const ContactUsPage = lazy(() => import("./pages/contactus"));

  return (
    <>
      <Suspense fallback="Content is Loading, Please wait....">
        <Contentpage />
      </Suspense>
      <About />
      <Suspense fallback="Content is Loading, Please wait....">
        <ContactUsPage />
      </Suspense>
      <Suspense fallback="Footer is Loading, Please wait....">
        <FooterPage />
      </Suspense>
      <div style={{ position: "fixed", bottom: "30px", right: "30px" }}>
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;
