import { Box } from "@mantine/core";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

function App() {
  return (
    <Box className="main-container">
      <div className="container">
        <Header />
        <Content />
      </div>
    </Box>
  );
}

export default App;
