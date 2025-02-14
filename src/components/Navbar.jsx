import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    } 

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-purple-700">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                    <span className="text-xl tracking-tight hover:text-purple-400">Virtual<span className="text-purple-700">Q</span> </span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index} className='hover:text-purple-300'>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a className="py-2 px-3 border rounded-md" href="#">Sing In</a>
                    <a className="bg-gradient-to-r from-purple-500 to-blue-800 py-2 px-3 rounded-md" href="#">Create ann account</a>
                </div>
                <div className='lg:hidden md:flex flex-col lustify-end'>
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className='py-4'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex space-x-6'>
                        <a href="#" className='py-2 px-3 border rounded-md'>Sing In</a>
                        <a className="bg-gradient-to-r from-purple-500 to-blue-800 py-2 px-3 rounded-md" href="#">Create ann account</a>
                    </div>
                </div> 
            )}
        </div>
    </nav>
  )
}

export default Navbar