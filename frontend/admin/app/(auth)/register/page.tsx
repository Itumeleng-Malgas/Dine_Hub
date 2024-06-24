import WithSuspense from "@/components/WithSuspense"
import RegisterComponent from "@/components/auth/Register"

const RegisterPage = () => {
  return (
    <WithSuspense children={<RegisterComponent />}/>
  )
}

export default RegisterPage