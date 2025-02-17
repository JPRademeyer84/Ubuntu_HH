import Footer from "@/components/footer/Footer";
import Login from "@/components/modal/Login";
import SignUp from "@/components/modal/SignUp";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import { AppProvider } from "@/context/context";
import "bootstrap/dist/css/bootstrap.min.css";
import Bootstrap from "../components/common/Bootstrap";
import "../public/css/line-awesome.min.css";
import "../public/css/modal-video.scss";
import "../styles/main.sass";

export const metadata = {
  title: "Ubuntu Helping Hands",
  description: "We support NPO and Crisis centers by selling Raffle Tickets and awarding amazing prices. We support communities to build the nation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Bootstrap>
        <AppProvider>
          <body>
            {/* SignUp Modal */}
            <SignUp />
            {/* Login Modal */}
            <Login />
            {/* Header section */}

            {children}

          </body>
        </AppProvider>
      </Bootstrap>
    </html>
  );
}
