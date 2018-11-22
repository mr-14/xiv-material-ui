import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MdLink } from 'react-icons/md'

const Li = styled.li`
  padding: 10px 15px 0;
`

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ dense }) => dense ? '8px' : '12px'} 15px;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;
  transition: all 300ms linear;
  &:hover {
    background-color: rgba(255,255,255,.2);
  };
  ${({ active }) => active && `
    background-color: rgba(255,255,255,.2);
    box-shadow: none;
    &:hover {
      background-color: rgba(255,255,255,.2);
    };
  `}
  ${({ classes }) => classes}
`

const ItemIcon = styled.div`
  width: 24px;
  height: 24px;
  font-size: 24px;
  color: ${({ visible }) => visible ? 'transparent' : 'rgba(255, 255, 255, 0.8)'};
`

const ItemText = styled.div`
  flex: 1 1 auto;
  margin: 0 15px;
  padding: 0;
  font-size: 14px;
  color: #fff;
`

const ListItem = ({ classes, label, PrefixIcon, SuffixIcon, active, onClick, dense }) => {
  return (
    <Li>
      <ItemContent active={active} classes={classes.content} dense={dense} onClick={onClick}>
        <ItemIcon visible={!PrefixIcon}>{PrefixIcon ? <PrefixIcon /> : <MdLink />}</ItemIcon>
        <ItemText>{label}</ItemText>
        {SuffixIcon && <ItemIcon>{<SuffixIcon />}</ItemIcon>}
      </ItemContent>
    </Li>
  )
}

ListItem.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string.isRequired,
  PrefixIcon: PropTypes.any,
  SuffixIcon: PropTypes.any,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  dense: PropTypes.bool,
}

ListItem.defaultProps = {
  classes: {},
  active: false,
  onClick: () => null,
  dense: false,
}

export default ListItem
