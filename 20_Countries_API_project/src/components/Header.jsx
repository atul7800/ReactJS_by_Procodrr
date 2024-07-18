function Header({ theme }) {
  const [isDark, setIsDark] = theme;

  function darkLightMode() {
    //document.body.classList.toggle("dark");
    localStorage.setItem("isDark", !isDark);
    setIsDark(!isDark);
  }

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={() => darkLightMode()}>
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}

export default Header;
