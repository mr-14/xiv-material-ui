import React from 'react'
import PropTypes from 'prop-types'
import List from 'components/List/List'
import NavGroup from './NavGroup'
import NavItem from './NavItem'

class NavList extends React.PureComponent {
  renderLink = item => {
    return (
      <NavItem
        key={item.id}
        activeLink={this.props.activeLink}
        onClick={this.props.onClick}
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
      {this.renderList(group.items)}
    </NavGroup>
  )

  renderList = items => {
    return (
      <List>
        {items.map((item, index) => item.path ? this.renderLink(item) : this.renderGroup(item, index))}
      </List>
    )
  }

  render() {
    return this.renderList(this.props.items)
  }
}

NavList.propTypes = {
  items: PropTypes.array.isRequired,
  activeLink: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default NavList
