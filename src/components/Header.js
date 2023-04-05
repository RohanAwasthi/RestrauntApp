import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,click}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
    <Button click={click}
    text = 'Search'/>
    </header>
  )
}

Header.defaultProps={
    title:'Khana Khazana'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header