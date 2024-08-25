import { Upvote } from "./components/Upvote";
import { Jelly } from "./components/Jelly";
import Popup from "./components/Popup";
import DevMode from "./components/DevMode";

export default function App() {
  return (
    <main className="px-2 my-20">
      <Upvote />
      <Jelly />
      <Popup />
      <DevMode />
    </main>
  );
}
