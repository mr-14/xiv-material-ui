import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { MdDashboard, MdCardGiftcard } from "react-icons/md"
import NavList from '../src/components/NavList'

const items = [
  {
    id: 'dashboard',
    path: '/dashboard',
    label: 'Dashboard',
    Icon: MdDashboard,
  },
  {
    label: 'Product',
    Icon: MdCardGiftcard,
    items: [
      {
        id: 'category',
        path: '/products/categories',
        label: 'Category',
      },
      {
        id: 'product',
        path: '/products',
        label: 'Product',
      },
    ]
  },
]

storiesOf('NavList', module)
  .addDecorator(story => (
    <div style={{ width: 300, backgroundColor: '#333', boxSizing: 'border-box' }}>
      {story()}
    </div>
  ))
  .add('default', () => (
    <NavList items={items} onClick={action('Item clicked')} activeLink="category" />
  ))
