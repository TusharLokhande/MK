import SidebarContextProvider from "./components/sidebar/sidebar_context";
import MainLayout from "./layout/main.layout";

function App() {
  return (
    <SidebarContextProvider>
      <MainLayout />
    </SidebarContextProvider>
  );
}

export default App;
