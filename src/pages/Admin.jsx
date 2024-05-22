import TaoGame1Admin from "@/components/ui/TaoGame1-Admin";
import TaoGame2Admin from "@/components/ui/TaoGame2-Admin";
import TaoGame3Admin from "@/components/ui/TaoGame3-Admin";
import React, { useState } from "react";
const menuItems = [
  { id: "game1", label: "Tạo game gà", component: <TaoGame1Admin /> },
  { id: "game2", label: "Tạo game bầu cua", component: <TaoGame2Admin /> },
  { id: "game3", label: "Tạo game tài xỉu", component: <TaoGame3Admin /> },
  // Thêm các game khác ở đây
];
const Admin = () => {
  const [activeMenu, setActiveMenu] = useState(menuItems[0].id);

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  const renderActiveComponent = () => {
    const activeItem = menuItems.find((item) => item.id === activeMenu);
    return activeItem.component;
  };

  return (
    <div className="box_admin">
      <aside className="sidebar">
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={activeMenu === item.id ? "active" : ""}
              >
                <a
                  href={`#${item.id}`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main>{renderActiveComponent()}</main>
    </div>
  );
};

export default Admin;
