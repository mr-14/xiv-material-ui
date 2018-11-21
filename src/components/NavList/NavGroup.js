import React from 'react'
import PropTypes from 'prop-types'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import NavItem from 'components/List/ListItem'

class NavGroup extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { active: this.isActive(props.items, props.activeLink) }
  }

  isActive = (items, activeLink) => {
    if (!items) { return false }

    const links = items.filter(item => !!item.path)
    let isActive = links.some(item => item.id === activeLink)

    if (!isActive) {
      const groups = items.filter(item => !!item.items)
      for (const group of groups) {
        if (this.isActive(group.items, activeLink)) { return true }
      }
    }

    return isActive
  }

  render() {
    const { label, Icon, children } = this.props
    return (
      <React.Fragment>
        <NavItem
          label={label}
          PrefixIcon={Icon}
          SuffixIcon={this.state.active ? MdExpandLess : MdExpandMore}
          active={this.state.active}
          onClick={() => console.log('hi')}
        >
          {children}
        </NavItem>
      </React.Fragment>
    )
  }
}

NavGroup.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.any,
  items: PropTypes.array.isRequired,
  activeLink: PropTypes.string,
}

export default NavGroup
