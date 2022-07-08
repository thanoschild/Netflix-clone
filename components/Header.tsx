import {BellIcon, SearchIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';

function Header() {

    const [isScrolled, setIsScrolled] = useState(false);
    const {logout} = useAuth();

    useEffect(() =>{
      const handelScroll = () =>{
        if(window.scrollY > 0){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
      }

      window.addEventListener("scroll", handelScroll)

      return () =>{
        window.removeEventListener('scroll', handelScroll)
      }
    }, [])

  return (
    
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        {/* left section */}
        <div className="flex items-center space-x-2 md:space-x-10">
         <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
            <li className="headerlink">Home</li>
            <li className="headerlink">TV Shows</li>
            <li className="headerlink">Movies</li>
            <li className="headerlink">New & Popular</li>
            <li className="headerlink">My List</li>
        </ul>
        </div>

        {/* right section */}
        <div className='flex items-center space-x-4 text-sm font-light'>
           <SearchIcon className='hidden h-6 w-6 sm:inline'/>
           <p className='hidden lg:inline'>Kids</p>
           <BellIcon className='h-6 w-6'/>
           {/* <Link href="/account"> */}
            <img
            onClick={logout}
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
            />
           {/* </Link> */}
        </div>
    </header>
  )
}

export default Header
