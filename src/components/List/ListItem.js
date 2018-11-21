import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Li = styled.li`
  width: auto;
  margin: 10px 15px 0;
  padding: 10px 15px;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;
  transition: all 300ms linear;
  &:hover: {
    background-color: rgba(255,255,255,.2);
  }
  ${({ active }) => active && `
    background-color: #00acc1;
    box-shadow: 0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2);
    &:hover: {
      background-color: #00acc1;
    };
  `}
`

const ItemIcon = styled.div`
  width: 24px;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.8);
`

const ItemLabel = styled.div`
  margin-right: 0 15px;
  padding: 0;
  font-size: 14px;
  color: #fff;
`

const ListItem = ({ label, PrefixIcon, SuffixIcon, active, onClick }) => {
  return (
    <Li active={active} onClick={onClick}>
      {PrefixIcon && <ItemIcon>{<PrefixIcon />}</ItemIcon>}
      <ItemLabel>{label}</ItemLabel>
      {SuffixIcon && <ItemIcon>{<SuffixIcon />}</ItemIcon>}
    </Li>
  )
}

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  PrefixIcon: PropTypes.any,
  SuffixIcon: PropTypes.any,
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

ListItem.defaultProps = {
  active: false,
  onClick: () => null,
}

export default ListItem
