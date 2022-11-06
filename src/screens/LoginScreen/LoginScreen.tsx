import { FC } from 'react';

const LoginScreen: FC = () => {
  return (
    <form>
      <input name="login" placeholder="Login" type="text" />
      <input name="password" placeholder="Login" type="password" />
      <button type="submit" name="submit">
        Login
      </button>
    </form>
  );
};

export default LoginScreen;
