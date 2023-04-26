//creamos nuestro componente llamado Menu
function Menu() {
  const m = (
    <navbar className="navbar">
      <a href="#" className="menu">
        Menu 1
      </a>
      -
      <a href="#" className="menu">
        Menu 2
      </a>
      -
      <a href="#" className="menu">
        Menu 3
      </a>
    </navbar>
  );

  return m;
}

export default Menu;
