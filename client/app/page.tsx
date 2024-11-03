import Navbar from "./components/Navbar";
import { TokenProvider } from "./context/TokenProvider";
export default function Home() {
  return (
    <>
    <TokenProvider>
    <Navbar/>
    Welcome to homepage
    </TokenProvider>
    </>
  );
}
