import React from 'react'

type Props = {}

const Divider = (props: Props) => {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t border-black"></div>
      {/* <span className="flex-shrink mx-4 text-gray-400"></span> */}
      {/* <div className="flex-grow border-t border-gray-400"></div> */}
    </div>
  );
}

export default Divider