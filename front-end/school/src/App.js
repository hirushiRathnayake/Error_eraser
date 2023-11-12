import React from "react";

import BasicExample from "./Components/BlockButton";


function App() {
  return (
    <div className="App">
   
<BasicExample ctitle="Admin"  cContent="Are you an admin? If you are a admin, please log using below button"  cButton= "Admin Login"/>

<BasicExample ctitle="Teacher"  cContent="Are you a Teacher? If you are a Teacher, please log using below button"  cButton= "Teacher Login"/>
    
<BasicExample ctitle="Student"  cContent="Are you a  student? If you are a student, please log using this button"  cButton= "student Login"/>   
    </div>
  );
}

export default App;
