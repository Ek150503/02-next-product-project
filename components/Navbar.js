import Link from "next/link";

const Navbar = () => {
  const nav = [
    { id: 1, name: "home", link: "/" },
    { id: 1, name: "products", link: "/products" },
    { id: 1, name: "about", link: "/about" },
  ];
  return (
    <nav className='navbar'>
      <h3>STORE</h3>
      <ul>
        {nav.map((a) => {
          return (
            <li key={a.id}>
              <Link href={a.link} className='link'>
                {a.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
