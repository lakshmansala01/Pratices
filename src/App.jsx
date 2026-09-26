import { useState } from 'react'

import './App.css'
import ExpertSection from './ExpertSection'
import YearsSection from './YearsSection'
import WhychooseSection from './WhychooseSection'
import HeaderSection from './HeaderSection'
import UserForm from './UserForm'
import ApiTable from './ApiTable'



function App() {
  return (
    <>
    <HeaderSection/>
    <ExpertSection/>
    <YearsSection/>
    <WhychooseSection/>
    <ApiTable/>
    <UserForm/>
    
   
   
    </>
  )
}
export default App