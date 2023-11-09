import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import ReadMore from "./components/ReadMore/ReadMore";
import About from "./components/About/About";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditionsPage from "./components/T&C/T&C";
import ContactUs from "./components/ContactUs/ContactUs";
import PaymentSuccessPage from "./components/PaymentSuccessPage/PaymentSuccessPage";

function App() {
    return ( 
        <BrowserRouter>
        <AppContext>
            <Header />
            <Routes>
                <Route path="/" element={< Home />} /> 
                <Route path="/category/:id" element={<Category /> } />
                <Route path="/product/:id" element={<SingleProduct /> } />
                <Route path="/ReadMore" element={<ReadMore />} />
                <Route path="/About" element={<About />} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/T&C" element={<TermsAndConditionsPage />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/success" element={<PaymentSuccessPage />} />

            </Routes>
            <Newsletter />
            <Footer />
        </AppContext>
        </BrowserRouter>
    );
}

export default App;
