import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Box } from '@chakra-ui/react';

const Spin = (props) => {
  const spinner = useSelector(state => state.appReducer.loading);

  return (
    <Box zIndex={222}>
      <Loader 
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        visible={spinner}
        z-index={1}
      />
    </Box>
  )
}

export default Spin;