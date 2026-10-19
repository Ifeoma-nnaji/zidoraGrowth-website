import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/FloatingActions/WhatsAppButton";
import AIChatButton from "../components/FloatingActions/AIChatButton";
import AIChatWidget from "../components/AIChat/AIChatWidget";

const MainLayout = ({ children }) => {
  return (
    <div className="site">
      <Navbar />

      <main>{children}</main>

      <Footer />

      <WhatsAppButton />
      <AIChatButton />
      <AIChatWidget />
    </div>
  );
};

export default MainLayout;
