import { Anchor, Box, Image, List } from "@mantine/core";
import classes from "./Header.module.css";

function Header() {
  return (
    <Box className={classes.header}>
      <Image src="./logo.svg" />
      <List className={classes.list}>
        <List.Item
          className={classes.list_item}
          style={{ listStyleType: "none" }}
        >
          <Anchor className={classes.anchor}>Home</Anchor>
        </List.Item>
        <List.Item
          className={classes.list_item}
          style={{ listStyleType: "none" }}
        >
          <Anchor className={classes.anchor}>New</Anchor>
        </List.Item>
        <List.Item
          className={classes.list_item}
          style={{ listStyleType: "none" }}
        >
          <Anchor className={classes.anchor}>Popular</Anchor>
        </List.Item>
        <List.Item
          className={classes.list_item}
          style={{ listStyleType: "none" }}
        >
          <Anchor className={classes.anchor}>Trending</Anchor>
        </List.Item>
        <List.Item
          className={classes.list_item}
          style={{ listStyleType: "none" }}
        >
          <Anchor className={classes.anchor}>Categories</Anchor>
        </List.Item>
      </List>
    </Box>
  );
}

export default Header;
