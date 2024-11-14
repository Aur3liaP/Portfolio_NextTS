import {navLinks} from '@/app/ui/Navbar/NavLinks'

export default function Menu() {

    return (
    <div className="md:hidden">
        <input type="checkbox" className="checkbox w-16 h-16 opacity-0 z-10 cursor-pointer" />
            <span className="button-menu cursor-pointer bg-[var(--clr-light-purple] text-gray-900 text-3xl font-bold w-16 h-16 flex justify-center items-center text-center"></span>
            {navLinks.map((link, index) => (
            <a
            key={index}
            href={link.href}
            >
                <button className="absolute">{link.name}</button>
            </a>
      ))}
    </div>
    );
  }
  