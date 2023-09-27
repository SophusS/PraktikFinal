import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="login" onSubmit={handleSubmit}>
              <h3 className="mb-4">Log in</h3>
  
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
  
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-success">
                Log in
              </button>
  
              {error && <div className="text-danger mt-2">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    )
}

export default Login



/*        <form className="login" onSubmit={handleSubmit}>
            <h3>Log in</h3>

            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input 
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Password:</label>
                <input 
                    type="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>

            <button disabled={isLoading} className="btn btn-succes">Log in</button>
            
            {error && <div className="error">{error}</div>}
        </form>*/