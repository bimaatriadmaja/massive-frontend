import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import "./style.css";
import "./App.css";
import Home from "./pages/home/home";
import AboutUs from "./pages/aboutus/aboutus"; 
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Evaluate from "./pages/home/evaluate";
import Evaluate1 from "./pages/home/evaluate1";
import Evaluate2 from "./pages/home/evaluate2";
import Evaluate3 from "./pages/home/evaluate3";
import Nutrition from "./pages/home/nutrition";
import Nutrition1 from "./pages/home/nutrition1";
import Nutrition2 from "./pages/home/nutrition2";
import Nutrition3 from "./pages/home/nutrition3";
import Workout from "./pages/home/workout";
import Workout1 from "./pages/home/workout1";
import Workout2 from "./pages/home/workout2";
import Workout3 from "./pages/home/workout3";
import Rest from "./pages/home/rest";
import Rest1 from "./pages/home/rest1";
import Rest2 from "./pages/home/rest2";
import Rest3 from "./pages/home/rest3";
import Selfcare from "./pages/home/selfcare";
import Selfcare1 from "./pages/home/selfcare1";
import Selfcare2 from "./pages/home/selfcare2";
import Selfcare3 from "./pages/home/selfcare3";
import ForgotPW from "./pages/forgotpw";
import Verif from "./pages/verif";
import NewPW from "./pages/newpw";
import SignupYey from "./pages/signupyey";
import NewPWyey from "./pages/newpwyey";
import BlogHome1 from "./pages/home/bloghome1";
import BlogHome2 from "./pages/home/bloghome2";
import BlogHome3 from "./pages/home/bloghome3";
import BlogHome4 from "./pages/home/bloghome4";
import BlogHome5 from "./pages/home/bloghome5";
import BlogHome6 from "./pages/home/bloghome6";
import BlogHome7 from "./pages/home/bloghome7";
import BlogHome8 from "./pages/home/bloghome8";
import BlogA from "./pages/blog/blogA";
import BA1 from "./pages/blog/ba1";
import BA2 from "./pages/blog/ba2";
import BA3 from "./pages/blog/ba3";
import BA4 from "./pages/blog/ba4";
import BA5 from "./pages/blog/ba5";
import BA6 from "./pages/blog/ba6";
import BA7 from "./pages/blog/ba7";
import BA8 from "./pages/blog/ba8";
import BA9 from "./pages/blog/ba9";
import BA10 from "./pages/blog/ba10";
import BA11 from "./pages/blog/ba11";
import BlogB from "./pages/blog/blogB";
import BB1 from "./pages/blog/bb1";
import BB2 from "./pages/blog/bb2";
import BB3 from "./pages/blog/bb3";
import BB4 from "./pages/blog/bb4";
import BB5 from "./pages/blog/bb5";
import BB6 from "./pages/blog/bb6";
import BB7 from "./pages/blog/bb7";
import BB8 from "./pages/blog/bb8";
import BB9 from "./pages/blog/bb9";
import BB10 from "./pages/blog/bb10";
import BB11 from "./pages/blog/bb11";
import Trend from "./pages/trend/trend";
import Milk from "./pages/trend/milk";
import Mat from "./pages/trend/mat";
import Bread from "./pages/trend/bread";
import Scrub from "./pages/trend/scrub";
import Trend1 from "./pages/trend/trend1";
import Trend2 from "./pages/trend/trend2";
import Trend3 from "./pages/trend/trend3";
import Trend4 from "./pages/trend/trend4";
import Trend5 from "./pages/trend/trend5";
import Trend6 from "./pages/trend/trend6";
import Trend7 from "./pages/trend/trend7";
import Trend8 from "./pages/trend/trend8";
import Trend9 from "./pages/trend/trend9";
import Trend10 from "./pages/trend/trend10";
import Trend11 from "./pages/trend/trend11";
import BmiCalculator from "./pages/checkup/bmi";
import Result from "./pages/checkup/result";
import ResultCewe from "./pages/checkup/resultcewe";
import Event from "./pages/community/event";
import TransaksiSuccess from "./pages/community/ts";
import Payment from "./pages/community/payment";
import Account from "./pages/account";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import FeedList from "./components/FeedList";
import AddFeed from "./components/AddFeed";
import EditFeed from "./components/EditFeed";
import PaymentList from "./components/PaymentList";
import AddPayment from "./components/AddPayment";
import EditPayment from "./components/EditPayment";
import Feeds from "./pages/community/feeds";
import Ticket from "./pages/community/ticket";
import FormAddFeed from "./pages/community/formaddfeed";

function App() {
  return (
    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/evaluate" element={<Evaluate />} />
          <Route path="/evaluate1" element={<Evaluate1 />} />
          <Route path="/evaluate2" element={<Evaluate2 />} />
          <Route path="/evaluate3" element={<Evaluate3 />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/nutrition1" element={<Nutrition1 />} />
          <Route path="/nutrition2" element={<Nutrition2 />} />
          <Route path="/nutrition3" element={<Nutrition3 />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/workout1" element={<Workout1 />} />
          <Route path="/workout2" element={<Workout2 />} />
          <Route path="/workout3" element={<Workout3 />} />
          <Route path="/rest" element={<Rest />} />
          <Route path="/rest1" element={<Rest1 />} />
          <Route path="/rest2" element={<Rest2 />} />
          <Route path="/rest3" element={<Rest3 />} />
          <Route path="/selfcare" element={<Selfcare />} />
          <Route path="/selfcare1" element={<Selfcare1 />} />
          <Route path="/selfcare2" element={<Selfcare2 />} />
          <Route path="/selfcare3" element={<Selfcare3 />} />
          <Route path="/forgotpw" element={<ForgotPW />} />
          <Route path="/verif" element={<Verif />} />
          <Route path="/newpw" element={<NewPW />} />
          <Route path="/signupyey" element={<SignupYey />} />
          <Route path="/newpwyey" element={<NewPWyey />} />
          <Route path="bloghome1" element={<BlogHome1 />} />
          <Route path="/bloghome2" element={<BlogHome2 />} />
          <Route path="/bloghome3" element={<BlogHome3 />} />
          <Route path="/bloghome4" element={<BlogHome4 />} />
          <Route path="/bloghome5" element={<BlogHome5 />} />
          <Route path="/bloghome6" element={<BlogHome6 />} />
          <Route path="/bloghome7" element={<BlogHome7 />} />
          <Route path="/bloghome8" element={<BlogHome8 />} />
          <Route path="/blogA" element={<BlogA />} />
          <Route path="/ba1" element={<BA1 />} />
          <Route path="/ba2" element={<BA2 />} />
          <Route path="/ba3" element={<BA3 />} />
          <Route path="/ba4" element={<BA4 />} />
          <Route path="/ba5" element={<BA5 />} />
          <Route path="/ba6" element={<BA6 />} />
          <Route path="/ba7" element={<BA7 />} />
          <Route path="/ba8" element={<BA8 />} />
          <Route path="/ba9" element={<BA9 />} />
          <Route path="/ba10" element={<BA10 />} />
          <Route path="/ba11" element={<BA11 />} />
          <Route path="/blogB" element={<BlogB />} />
          <Route path="/bb1" element={<BB1 />} />
          <Route path="/bb2" element={<BB2 />} />
          <Route path="/bb3" element={<BB3 />} />
          <Route path="/bb4" element={<BB4 />} />
          <Route path="/bb5" element={<BB5 />} />
          <Route path="/bb6" element={<BB6 />} />
          <Route path="/bb7" element={<BB7 />} />
          <Route path="/bb8" element={<BB8 />} />
          <Route path="/bb9" element={<BB9 />} />
          <Route path="/bb10" element={<BB10 />} />
          <Route path="/bb11" element={<BB11 />} />
          <Route path="/trend" element={<Trend />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/mat" element={<Mat />} />
          <Route path="/bread" element={<Bread />} />
          <Route path="/scrub" element={<Scrub />} />
          <Route path="/trend1" element={<Trend1 />} />
          <Route path="/trend2" element={<Trend2 />} />
          <Route path="/trend3" element={<Trend3 />} />
          <Route path="/trend4" element={<Trend4 />} />
          <Route path="/trend5" element={<Trend5 />} />
          <Route path="/trend6" element={<Trend6 />} />
          <Route path="/trend7" element={<Trend7 />} />
          <Route path="/trend8" element={<Trend8 />} />
          <Route path="/trend9" element={<Trend9 />} />
          <Route path="/trend10" element={<Trend10 />} />
          <Route path="/trend11" element={<Trend11 />} />
          <Route path="/bmi" element={<BmiCalculator />} />
          <Route path="/result" element={<Result />} />
          <Route path="/resultcewe" element={<ResultCewe />} />
          <Route path="/event" element={<Event />} />
          <Route path="/ts" element={<TransaksiSuccess />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/account" element={<Account />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/feedlist" element={<FeedList />} />
          <Route path="/addfeed" element={<AddFeed />} />
          <Route path="/editfeed/:id" element={<EditFeed />} />
          <Route path="/paymentlist" element={<PaymentList />} />
          <Route path="/addpayment" element={<AddPayment />} />
          <Route path="/editpayment/:id" element={<EditPayment />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/formaddfeed" element={<FormAddFeed />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;