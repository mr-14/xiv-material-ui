import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import ListItem from 'components/List/ListItem'

const navItemStyle = css`
  ${({ active }) => active && `
    background-color: #00acc1;
    box-shadow: 0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2);
    &:hover {
      background-color: #00acc1;
    };
  `}
`

function NavItem({ id, path, label, Icon, activeLink, onClick, dense }) {
  return (
    <ListItem
      classes={{ content: navItemStyle }}
      label={label}
      PrefixIcon={Icon}
      active={id === activeLink}
      onClick={() => onClick(path)}
      dense={dense}
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
  dense: PropTypes.bool,
}

export default NavItem
