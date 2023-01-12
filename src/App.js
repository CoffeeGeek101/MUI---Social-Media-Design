import { Box,createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Rightbar from "./components/RIghtbar";
import Sidebar from "./components/Sidebar";
import Upload from "./components/Upload";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette:{
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Header/>
      <Stack direction="row" spacing={3} justifyContent="space-around">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <Upload/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
