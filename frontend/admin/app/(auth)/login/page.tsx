import WithSuspense from "@/components/WithSuspense"
import LoginComponent from "@/components/auth/Login"

const LoginPage = () => {
  return (
    <WithSuspense children={<LoginComponent/>}/>
  )
}

export default LoginPage