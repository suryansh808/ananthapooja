import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import AllPooja from "./pages/AllPooja";
import PinCode from "./pages/PinCode";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PoojaDetailPage from "./pages/PoojaDetailPage";
import GalleryGrid from "./pages/GalleryGrid";
import AdminLayout from "./Admin/AdminLayout";
import Adminlogin from "./Admin/pages/AdminLogin";
import AdminProtectedRoute from "./Admin/AdminProtectedRoute";
import DashboardPage from "./Admin/pages/DashboardPage";
import ConsultancyQuery from "./Admin/pages/ConsultancyQuery";
import AddPurohit from "./Admin/pages/AddPurohit";
import RitualDesk from "./pages/RitualDesk";
import AddOperationTeam from "./Admin/pages/AddOperationTeam";
import HomeRedirect from "./Admin/pages/HomeRedirect";
import OpsLayout from "./Admin/OpsLayout";
import OpsDashboard from "./Admin/ops/OpsDashboard";
import OnboardPurohit from "./Admin/ops/OnboardPurohit";
import RoleProtectedRoute from "./Admin/components/RoleProtectedRoute";






function App() {
  const location = useLocation();
  const mainheader = [
        "/", "/poojabooking" , "/allpooja" ,"/poojadetail/:id", "/pincode" ,"/gallery","/about","/contact" , "/ritualdesk"
]
  return (
    <div >
      <ScrollToTop />
      {mainheader.includes(location.pathname.toLowerCase()) &&  <Header/> }
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poojabooking/:id" element={<BookPage />} />
        <Route path="/allpooja" element={<AllPooja />} />
        <Route path="/poojadetail/:id" element={<PoojaDetailPage />} />
        <Route path="/pincode" element={<PinCode/>} />
        <Route path="/gallery" element={<GalleryGrid/>} />
        <Route path="/about" element={<About/>} />  
        <Route path="/contact" element={<Contact/>} />  
        <Route path="/ritualdesk" element={<RitualDesk/>} />  

        <Route path="/teamlogin" element={<Adminlogin/>}/>
      

           <Route path="/home" element={<HomeRedirect/>} />

          <Route path="/admin" element={<AdminProtectedRoute> <RoleProtectedRoute allowedRole="admin"><AdminLayout /></RoleProtectedRoute></AdminProtectedRoute>}>
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="cosultancyquery" element={<ConsultancyQuery/>} />
                    <Route path="addpurohit" element={<AddPurohit/>} />
                 <Route path="addoperationteam" element={<AddOperationTeam/>} />
                    {/*    <Route path="analytics" element={<AnalyticsPage/>} />
                    <Route path="discounts" element={<DiscountsPage/>} />
                    <Route path="settings" element={<SettingsPage/>} /> */}
           </Route>

           <Route path="/ops" element={<RoleProtectedRoute allowedRole="operation"><OpsLayout/></RoleProtectedRoute>}>
                     <Route path="dashboard" element={<OpsDashboard />} />
                  <Route path="purohit" element={<OnboardPurohit />} />
                    {/*     <Route path="onboard/temple" element={<OnboardTemple />} /> */}
            </Route>
       





      </Routes>
          {mainheader.includes(location.pathname.toLowerCase()) &&  <Footer/> }
        

    </div>
  );
}

export default App;
