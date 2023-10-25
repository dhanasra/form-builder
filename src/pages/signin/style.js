import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100vw', 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#ccc6' 
  },
  wrapperFull: {
    backgroundColor: '#fff' 
  },
  card: {
    borderRadius: '3px', 
    width: '460px', 
    padding: '20px', 
    boxShadow: '0px 2px 30px #ccc6', 
    justifyContent: 'center', 
    display:'flex',
    backgroundColor: '#fff'
  },
  cardFull: {
    boxShadow: 'none',
  },
  content: {
    width: '320px', 
    textAlign: 'center'
  }
}));

export default useStyles;