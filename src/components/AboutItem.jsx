import React from 'react'

const AboutItem = ({imageUrl, name}) => {
  return (
    <div className="btn-front rounded-xl flex justify-center items-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
  )
}

export default AboutItem