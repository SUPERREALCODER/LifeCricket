export function Navigation() {
    return (
      <ul>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
      </ul>
    );
  }
  
  function NavLink({ href, children }) {
    return (
      <li>
        <a href={href}>{children}</a>
      </li>
    );
  }
  

  