import { Box, Button, Image, Text, Title } from "@mantine/core";
import classes from "./Content.module.css";

function Content() {
  return (
    <Box className={classes.content_container}>
      <Box className={classes.main_content}>
        <Image src="./image-web-3-desktop.jpg" />
        <Box className={classes.title_container}>
          <Title className={classes.title}>The Bright Future of Web 3.0?</Title>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text color="hsl(236, 13%, 42%)">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the prople. But is
              it really fulfilling its promise?
            </Text>
            <Button className={classes.button}>READ MORE</Button>
          </Box>
        </Box>
      </Box>
      <Box p={20} className={classes.news_container}>
        <Title size="35px" style={{ color: "hsl(35, 77%, 62%)" }} order={2}>
          New
        </Title>
        <Box className={classes.news_card}>
          <Text className={classes.news_subtitle}>
            Hydrogen VS Electric Cars
          </Text>
          <Text className={classes.news_paragraph}>
            Will hydrogen-fueled cars ever catch up to EVs
          </Text>
        </Box>
        <Box className={classes.news_card}>
          <Text className={classes.news_subtitle}>
            Hydrogen VS Electric Cars
          </Text>
          <Text className={classes.news_paragraph}>
            Will hydrogen-fueled cars ever catch up to EVs
          </Text>
        </Box>
        <Box className={classes.news_card}>
          <Text className={classes.news_subtitle}>
            Hydrogen VS Electric Cars
          </Text>
          <Text className={classes.news_paragraph}>
            Will hydrogen-fueled cars ever catch up to EVs
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Content;
