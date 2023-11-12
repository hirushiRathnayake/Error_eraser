import React from 'react'
import BasicExample from '../Components/BlockButton';
import admin from '../Assets/admin.png';
import student from '../Assets/student.jpg';
import teacher from '../Assets/teacher.png';


function User() {
  return (
    <div>

    <BasicExample cButton= "Admin Login" img= {admin}/>

    <BasicExample cButton= "Teacher Login" img={student}/>
    
     <BasicExample cButton= "student Login" img={teacher}/>  
    </div>
    
  )
}

export default User;

