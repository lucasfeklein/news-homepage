import { Box, Button, Image, Text, Title } from "@mantine/core";
import classes from "./Content.module.css";

const cards = [
  {
    title: "Hydrogen VS Electric Cars",
    subtitle: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    subtitle:
      "What are the possible adverse effects of on-demand AI image generation",
  },
  {
    title: "Is VC Funding Drying Up?",
    subtitle:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

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
        {cards.map((card) => (
          <Box key={card.title} className={classes.news_card}>
            <Text className={classes.news_subtitle}>{card.title}</Text>
            <Text className={classes.news_paragraph}>{card.subtitle}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Content;
