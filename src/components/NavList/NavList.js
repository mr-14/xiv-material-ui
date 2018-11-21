import React from 'react'
import PropTypes from 'prop-types'
import List from 'components/List/List'
import NavGroup from './NavGroup'
import NavItem from './NavItem'

class NavList extends React.PureComponent {
  renderLink = (item, dense) => {
    return (
      <NavItem
        key={item.id}
        activeLink={this.props.activeLink}
        onClick={this.props.onClick}
        dense={dense}
        {...item}
      />
    )
  }

  renderGroup = (group, index) => (
    <NavGroup
      key={index}
      activeLink={this.props.activeLink}
      {...group}
    >
      {this.renderList(group.items, true)}
    </NavGroup>
  )

  renderList = (items, dense) => {
    return (
      <List>
        {items.map((item, index) => item.path ? this.renderLink(item, dense) : this.renderGroup(item, index))}
      </List>
    )
  }

  render() {
    return this.renderList(this.props.items, false)
  }
}

NavList.propTypes = {
  items: PropTypes.array.isRequired,
  activeLink: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default NavList
