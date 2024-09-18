import React from "react";
import MenuFullscreen from "./components/menus/MenuFullscreen";


// Menu items for testing
const menuItems = [
  { label: "Accueil", link: "/" },
  { label: "À propos", link: "#about" },
  { label: "Services", link: "#services" },
  { label: "Galerie", link: "#gallery" },
  { label: "Contact", link: "#contact" },
];

function App() {
  return (
    <div>
      {/* Pass the menuItems and a logo to the MenuFullscreen component */}
      <MenuFullscreen logo="Mon Logo" menuItems={menuItems} />
    </div>
  );
}

export default App;
