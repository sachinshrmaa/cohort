import Link from "next/link";


const Navbar = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href='/' className="navbar-brand" id="logo">the basics</Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link href='/contact' className="nav-link text-dark">Contact</Link>            
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;