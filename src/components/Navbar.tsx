import logo from "@/app/img/logo.png";
import ThemeToggler from "@/components/ThemeToggler";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return ( <div className="bg-primary text-white py-2 px-5 flex justify-between items-center"> 
<Link href='/'>
        <Image className="rounded-3xl" src={ logo } alt="Logo " width={80} height={80} />
        </Link>
        <div className="flex flex-col items-center">
        <h1 className="text-3xl semibold text-foodBotColor">Food Bot</h1>
        <p>King of Tofu</p>
        </div>
        <ThemeToggler />
    </div> );
}
 
export default Navbar;