import { Sidebar } from "./components/sidebar/Sidebar";
import { LoginUI } from "./components/loginUI/LoginUI";
import SidebarContextProvider from "./components/sidebar/sidebar_context";

function App() {
  return (
    <SidebarContextProvider>
      <Sidebar />
      <LoginUI />
      <main className="">
        <div className="h-[200vh]" />
      </main>
    </SidebarContextProvider>
  );
}

export default App;
