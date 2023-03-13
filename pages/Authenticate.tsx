import Login from '../components/Frontend/pages/Auth/Login'
import SignUp from '../components/Frontend/pages/Auth/SignUp'
import st from '../styles/Auth.module.css'


function Index(){


return(
  <div className={st.background}>
   <Login />
   <SignUp />
  </div>

)

}

export default Index