import { Anchor, Box, Image, List } from "@mantine/core";
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react";
import classes from "./Header.module.css";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const size = useWindowSize();

  return (
    <Box className={classes.header}>
      <Image src="./logo.svg" />

      {size.width <= 800 ? ( // Render icon-menu for small screens
        <Image
          onClick={() => setToggleMenu(!toggleMenu)}
          style={{ cursor: "pointer" }}
          src="./icon-menu.svg"
        />
      ) : (
        // Render the list for larger screens
        <List className={classes.list}>
          <List.Item className={classes.list_item}>
            <Anchor className={classes.anchor}>Home</Anchor>
          </List.Item>
          <List.Item className={classes.list_item}>
            <Anchor className={classes.anchor}>New</Anchor>
          </List.Item>
          <List.Item className={classes.list_item}>
            <Anchor className={classes.anchor}>Popular</Anchor>
          </List.Item>
          <List.Item className={classes.list_item}>
            <Anchor className={classes.anchor}>Trending</Anchor>
          </List.Item>
          <List.Item className={classes.list_item}>
            <Anchor className={classes.anchor}>Categories</Anchor>
          </List.Item>
        </List>
      )}
      {toggleMenu && ( // Render the fixed menu when the icon-menu is clicked
        <div className={classes.fullscreenOverlay}>
          <div className={classes.fixedMenu}>
            <Image
              src="./icon-menu-close.svg"
              w={40}
              style={{
                alignSelf: "end",
                cursor: "pointer",
              }}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
            <List>
              <List.Item className={classes.list_item}>
                <Anchor className={classes.anchor}>Home</Anchor>
              </List.Item>
              <List.Item className={classes.list_item}>
                <Anchor className={classes.anchor}>New</Anchor>
              </List.Item>
              <List.Item className={classes.list_item}>
                <Anchor className={classes.anchor}>Popular</Anchor>
              </List.Item>
              <List.Item className={classes.list_item}>
                <Anchor className={classes.anchor}>Trending</Anchor>
              </List.Item>
              <List.Item className={classes.list_item}>
                <Anchor className={classes.anchor}>Categories</Anchor>
              </List.Item>
            </List>
          </div>
        </div>
      )}
    </Box>
  );
}

export default Header;
