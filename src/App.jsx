import { Upvote } from "./components/Upvote";
import { Jelly } from "./components/Jelly";
import Popup from "./components/Popup";

export default function App() {
  return (
    <main className="px-2 my-20">
      <Upvote />
      <Jelly />
      <Popup />
    </main>
  );
}
