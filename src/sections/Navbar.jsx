import { useState } from "react"
function Navigation() {
    return (
        <ul className="nav-ul">
            <li className="nav-li">
            </li>
        </ul>
    )
}
const Navbar = () => {
    const[isOpen, setISOpen]=useState(false)
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
        <div className="mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-2 sm:py-0">
                <a href="/" className="text-xl font-bold transition-colors  text-neutral-400 hover:text-white">
                    Anu
                </a>
                <button 
                    onClick={() => setISOpen(!isOpen)} 
                    className="flex cursor-pointer text-nuetral-400 
                    hover:text-white focus:outline-none sm:hidden"
                >
                    <img 
                    src={isOpen?"assets/close.svg":"assets/menu.svg"} 
                    className="w-6 h-6" 
                    alt="toggle"/>
                </button>
                <nav className="hidden sm:flex"></nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar