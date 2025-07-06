import React from 'react';

import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
      <Home />
      <App/>
    </>
  );
}

export default App;





// // In your main App.js or similar
// import Dashboard from './Dashboard';
// import AuthProvider from './AuthProvider';

// function App() {
//   return (
//     <AuthProvider>
//       {({ user }) => (
//         <Router>
//           <Routes>
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/*" element={<Dashboard user={user} />} />
//           </Routes>
//         </Router>
//       )}
//     </AuthProvider>
//   );
// }

// export default App;
