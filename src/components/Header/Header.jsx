import { Box, List, Title } from "@mantine/core";

function Header() {
  return (
    <Box className="header">
      <Title order={1}>W.</Title>
      <List>
        <List.Item style={{ listStyleType: "none" }}>Home</List.Item>
        <List.Item style={{ listStyleType: "none" }}>New</List.Item>
        <List.Item style={{ listStyleType: "none" }}>Popular</List.Item>
        <List.Item style={{ listStyleType: "none" }}>Trending</List.Item>
        <List.Item style={{ listStyleType: "none" }}>Categories</List.Item>
      </List>
    </Box>
  );
}

export default Header;
