import './NavBar.css'
const NavBar = ( props ) => {
    const navs = ['Web Design','Web Development','Mobile Development','Digital Marketing'];
    return(
        <div>
            <ul className="navBar">
                {navs.map((items,index) => (
                    <li key={index}>
                        {items}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavBar