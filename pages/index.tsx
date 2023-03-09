import Login from '../components/Frontend/pages/Auth/Login'
import st from '../styles/Auth.module.css'


function Index(){


return(
  <div className={st.background}>
  <div className={st.form}>
   <Login />
  </div>
  </div>

)

}

export default Index