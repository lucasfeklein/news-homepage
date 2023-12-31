import { Box, Button, Flex, Image, Text, Title } from "@mantine/core";
import classes from "./Content.module.css";

const news = [
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

const cards = [
  {
    number: "01",
    image: "./image-retro-pcs.jpg",
    title: "Reviving Retro PCs",
    subtitle: "What happens when old PCs are given modern upgrades?",
  },
  {
    number: "02",
    image: "./image-top-laptops.jpg",
    title: "Top 10 Laptops of 2022",
    subtitle: "What happens when old PCs are given modern upgrades?",
  },
  {
    number: "03",
    image: "./image-gaming-growth.jpg",
    title: "The Growth of Gaming",
    subtitle: "How the pandemic has sparked fresh opportunities",
  },
];

function Content() {
  return (
    <Box>
      <Box className={classes.content_container}>
        <Box className={classes.main_content}>
          <Image
            className={classes.desktop_image}
            src="./image-web-3-desktop.jpg"
          />
          <Image
            className={classes.mobile_image}
            src="./image-web-3-mobile.jpg"
          />

          <Box className={classes.title_container}>
            <Title className={classes.title}>
              The Bright Future of Web 3.0?
            </Title>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <Text color="hsl(236, 13%, 42%)">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the prople.
                But is it really fulfilling its promise?
              </Text>
              <Button className={classes.button}>READ MORE</Button>
            </Box>
          </Box>
        </Box>
        <Box p={20} className={classes.news_container}>
          <Title size="35px" style={{ color: "hsl(35, 77%, 62%)" }} order={2}>
            New
          </Title>
          {news.map((news) => (
            <Box key={news.title} className={classes.news_card}>
              <Text className={classes.news_subtitle}>{news.title}</Text>
              <Text className={classes.news_paragraph}>{news.subtitle}</Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={classes.cards_container}>
        {cards.map((card) => (
          <Flex
            className={classes.hover}
            style={{ flex: "1", minWidth: "300px" }}
            key={card.title}
            gap={20}
          >
            <Image src={card.image} height={120} />
            <Flex direction="column" justify="space-between">
              <Text
                style={{
                  fontSize: "30px",
                  color: "hsl(233, 8%, 79%)",
                  fontWeight: "bold",
                }}
              >
                {card.number}
              </Text>
              <Title order={3} className={classes.card_title}>
                {card.title}
              </Title>
              <Text className={classes.card_subtitle}>{card.subtitle}</Text>
            </Flex>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}

export default Content;
