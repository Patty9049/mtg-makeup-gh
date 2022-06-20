import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Header from "../components/header/Header";
import Navbar from "../components/navigation/navbar/Navbar";
import Home from "../views/Home/Home.js";
import Offers from "../views/Offers/Offers.js";
import MyWorks from "../views/MyWorks/MyWorks";
import Vouchers from "../views/Vouchers/Vouchers";
import Contact from "../views/Contact/Contact";
import Footer from "../components/navigation/footer/Footer";
import Training from "../views/Training/Training";
import "./Router.module.scss";
import WorkImageModal from "../components/WorkImageModal/WorkImageModal";
import IndMakeup from "../components/IndywidualMakeup/IndMake";
import IndWeddMake from "../components/IndywidualWeddMakeup.js/IndWeddMake";
import WeddMake from "../components/WeddMakeup.js/WeddMake";
import SunBathing from "../components/SunBathing/Sunbathing";
import AppContext from "../context";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <WorkImageModal />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.offers} component={Offers} />
        <Route path={routes.myWorks} component={MyWorks} />
        <Route path={routes.vouchers} component={Vouchers} />
        <Route path={routes.contact} component={Contact} />
        <Route path={routes.indMakeup} component={IndMakeup} />
        <Route path={routes.indWeddMake} component={IndWeddMake} />
        <Route path={routes.weddMake} component={WeddMake} />
        <Route path={routes.training} component={Training} />
        <Route path={routes.sunBathing} component={SunBathing} />
        <Route path={routes.privetPolicy} component={PrivacyPolicy} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
