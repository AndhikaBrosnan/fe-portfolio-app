import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";

const MobileNavbar = () => {
  return (
    <Flex justifyContent="flex-start" alignItems="center">
      <Menu>
        <MenuButton as={Button} rightIcon={<HamburgerIcon />}></MenuButton>
        <MenuList>
          <MenuItem>Experience</MenuItem>
          <MenuItem>Education</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Certification</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default MobileNavbar;
