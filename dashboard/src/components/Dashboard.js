// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import Apps from "./Apps";
// import Funds from "./Funds";
// import Holdings from "./Holdings";

// import Orders from "./Orders";
// import Positions from "./Positions";
// import Summary from "./Summary";
// import WatchList from "./WatchList";
// import { GeneralContextProvider } from "./GeneralContext";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <GeneralContextProvider>
//         <WatchList />
//       </GeneralContextProvider>
//       <div className="content">
//         <Routes>
//           <Route exact path="/" element={<Summary />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/holdings" element={<Holdings />} />
//           <Route path="/positions" element={<Positions />} />
//           <Route path="/funds" element={<Funds />} />
//           <Route path="/apps" element={<Apps />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;











import React from "react";
import { Route, Routes } from "react-router-dom";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        {/* Wrap both WatchList and content in the same provider */}
        <WatchList />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;















// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import Apps from "./Apps";
// import Funds from "./Funds";
// import Holdings from "./Holdings";
// import Orders from "./Orders";
// import Positions from "./Positions";
// import Summary from "./Summary";
// import WatchList from "./WatchList";
// import { GeneralContextProvider } from "./GeneralContext";
// // import Sidebar from "./Sidebar"; // New component
// // import Header from "./Header"; // New component
// import ErrorBoundary from "./ErrorBoundary"; // New component
// import ProtectRoute from "./ProtectRoute"; // New component
// import "./Dashboard.css"; // New CSS file

// const Dashboard = ({ user }) => {
//   return (
//     <div className="dashboard-container">
//       {/* Error boundary to catch any errors in child components */}
//       <ErrorBoundary>
//         <GeneralContextProvider user={user}>
//           {/* Header component for navigation and user info */}
//           {/* <Header /> */}

//           <div className="dashboard-layout">
//             {/* Sidebar navigation */}
//             {/* <Sidebar /> */}

//             {/* Main content area */}
//             <main className="content">
//               <Routes>
//                 {/* Default route redirects to summary */}
//                 <Route path="/" element={<Navigate to="/summary" replace />} />

//                 {/* Protected routes - only accessible when authenticated */}
//                 <Route element={<ProtectRoute user={user} />}>
//                   <Route path="/summary" element={<Summary />} />
//                   <Route path="/orders" element={<Orders />} />
//                   <Route path="/holdings" element={<Holdings />} />
//                   <Route path="/positions" element={<Positions />} />
//                   <Route path="/funds" element={<Funds />} />
//                   <Route path="/apps" element={<Apps />} />
//                 </Route>

//                 {/* 404 fallback route */}
//                 {/* <Route path="*" element={<NotFound />} /> */}
//               </Routes>
//             </main>
//           </div>

//           {/* WatchList component - could be made toggleable */}
//           <WatchList />
//         </GeneralContextProvider>
//       </ErrorBoundary>
//     </div>
//   );
// };


// export default Dashboard;
