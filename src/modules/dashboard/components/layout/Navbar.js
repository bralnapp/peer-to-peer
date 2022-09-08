import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Sidebar from './Sidebar'
import { dashboardNavLinks } from 'src/utils/data/data.dashboardNavLinks'
import { Link } from 'react-router-dom'
import Button from 'src/modules/common/components/Button'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
      />
      <nav className="fixed z-[50] h-14 bg-white flex items-center w-full md:h-20">
        <div className="layout-container flex items-center justify-between">
          <div className="font-medium uppercase">Logo</div>
          <div className="flex items-center space-x-8">
            <ul className='flex items-center space-x-8'>
              {
                dashboardNavLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} className={`capitalize text-base leading-[22px] font-medium ${index === 1 ? 'text-[#737374]' : 'text-primary-2'}`}>{item.name}</Link>
                  </li>
                ))
              }
            </ul>
            <Button
              title="connect wallet"
              className="w-32 h-8"
            />
          </div>
          <div onClick={toggleMenu} className="md:hidden cursor-pointer">
            <Bars3Icon className="h-6 w-6" />
          </div>
        </div>
      </nav>
    </>
  );
}
