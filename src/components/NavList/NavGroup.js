import React from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'react-collapse'
import { presets } from 'react-motion'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import ListItem from 'components/List/ListItem'

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
        <ListItem
          label={label}
          PrefixIcon={Icon}
          SuffixIcon={this.state.active ? MdArrowDropUp : MdArrowDropDown}
          active={this.state.active}
          onClick={() => this.setState({ active: !this.state.active })}
        />
        <Collapse isOpened={this.state.active} springConfig={presets.gentle}>
          {children}
        </Collapse>
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
