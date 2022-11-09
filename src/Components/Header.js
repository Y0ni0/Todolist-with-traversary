import PropTypes from 'prop-types'

import Button from './Button'
const Header = ({title}) => {
  return (
   <header className='header'>
       <h1>{title}
       <Button />
       </h1>
   </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// css in js
// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'black',
// }

export default Header