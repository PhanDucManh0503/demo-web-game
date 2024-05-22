import { Avatar } from "@chakra-ui/react";

const Header = () => {
  return (
    <div className="header">
      <div className="avatar_header">
        <Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
        <div className="box_name_avatar">
          <p>
            <strong>Oshigaki Kisame</strong>
          </p>
          <p>ID: 999985</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
