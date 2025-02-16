import { Sidebar } from "./components/sidebar/Sidebar";
import SidebarContextProvider from "./components/sidebar/sidebar_context";

function App() {
  return (
    <SidebarContextProvider>
      <Sidebar />
      <main className="">
        <div className="h-[200vh]" />
      </main>
    </SidebarContextProvider>
  );
}

export default App;
