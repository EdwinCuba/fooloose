import React from 'react';
import { useMediaQuery } from 'react-responsive';

const FastShip = () => {
  const isPhoneOrTablet = useMediaQuery({
    query: '(max-device-width: 1024px)'
  })

  return (
    <div className="FastShip">
      {isPhoneOrTablet ? 
        <img src="https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/0f70271f-1bc2-4f15-b4ef-1174c545544d___04006ffa8a07098cd44044e6c3ae32f6.png" width='100%' alt="" />
        :
        <img src='https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/dbdfa0e9-4eb3-4813-9718-3213910133b9___3c54c4e3a5ac3731a7548ae5a0867d00.png' width='100%' alt='' />
      }
    </div>
  )

}

export default FastShip;