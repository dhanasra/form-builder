import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: '#1c222d', 
    height: '100vh', 
    color: '#fff', 
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
}));

export default useStyles;