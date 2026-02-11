import '../../assets/styles/Login.scss';

function Login() {
  return (
    <div className='login'>
      <h1 className='login-title'>LOGIN</h1>

      <form className='login-form'>
        <label className='login-label' htmlFor='login'>
          Login
        </label>
        <input
          className='login-input'
          id='login'
          name='login'
          type='text'
          placeholder='login'
        />

        <label className='login-label' htmlFor='password'>
          Mot de passe
        </label>
        <input
          className='login-input'
          id='password'
          name='password'
          type='password'
          placeholder='Mot de passe'
        />

        <button className='login-button' type='submit'>
          Connexion
        </button>
      </form>
    </div>
  );
}

export default Login;
