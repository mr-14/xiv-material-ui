import React from 'react'
import PropTypes from 'prop-types'
import ListItem from 'components/List/ListItem'

function NavItem({ id, path, label, Icon, activeLink, onClick }) {
  return (
    <ListItem
      label={label}
      PrefixIcon={Icon}
      active={id === activeLink}
      onClick={() => onClick(path)}
    />
  )
}

NavItem.propTypes = {
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.any,
  activeLink: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default NavItem
