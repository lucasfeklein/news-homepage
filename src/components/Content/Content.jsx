import { Box, Button, Image, Text, Title } from "@mantine/core";
import classes from "./Content.module.css";

function Content() {
  return (
    <Box className={classes.content_container}>
      <Box className={classes.main_content}>
        <Image src="./image-web-3-desktop.jpg" />
        <Box className={classes.title_container}>
          <Title className={classes.title}>The Brigth Future of Web 3.0?</Title>
          <Box>
            <Text>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the prople. But is
              it really fulfilling its promise?
            </Text>
            <Button>READ MORE</Button>
          </Box>
        </Box>
      </Box>
      <Box className={classes.news_container}>oi</Box>
    </Box>
  );
}

export default Content;
