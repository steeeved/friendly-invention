import { auth, provider } from '../../Config/Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ILogged } from '../../Elements/types';

import Styles from './Login.module.scss';
import GoogleIcon from '@mui/icons-material/Google';

const Login = (props: ILogged) => {
  const { setLogged } = props;
  const navigate = useNavigate();
  setLogged(false);

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate('/');
    setLogged(true);
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.google}>
        <button onClick={signInWithGoogle}>Sign in With Google</button>
      </div>
      <div className={Styles.name}>
        <p>Use your name instead</p>
        <input placeholder="Enter your name" />
        </div>
    </div>
  );
};

export default Login;
