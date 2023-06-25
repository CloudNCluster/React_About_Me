import { Suspense, lazy, useState } from "react";
import ScrollToTopButton from "./pages/ScrollUp";
import About from "./about";
// import ContactUs from "./pages/contactus";
// import Content from "./pages/content";
// import Footer from "./pages/Footer/index";

function App() {
  const Contentpage = lazy(() => import("./pages/content"));
  const FooterPage = lazy(() => import("./pages/Footer/index"));
  const ContactUsPage = lazy(() => import("./pages/contactus"));
  const [theme, setTheme] = useState(null);

  const toogleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    } else {
      setTheme("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
    }
  };

  return (
    <>
      <Suspense fallback="Content is Loading, Please wait....">
        <Contentpage theme={theme} toogleTheme={toogleTheme} />
      </Suspense>
      <About theme={theme} />
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
