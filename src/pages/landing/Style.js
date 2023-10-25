import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  logoTitle: {
    marginLeft: '4px',
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: 500,
    flexGrow: 1
  },
  content: {
    height: 'calc(100vh - 64px)', 
    display: 'flex', 
    padding: '100px'
  },
  contentFull: {
    padding: '30px'
  },
  container: {
    width: '50%',
    height: '100%',
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start', 
    padding: '0px'
  },
  imgContainer: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  containerExpand: {
    width: '100%'
  },
  hideOnSmallScreen: {
    display: 'none',
  },
}));

export default useStyles;