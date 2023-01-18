
import "./app.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {



  return (
    <section className="App">
      <TwitterFollowCard
        initialIsFollowing
        userName={'JaviPitino'}
        name={'Javi Pitino'}
      />
      <TwitterFollowCard
        initialIsFollowing={false}
        userName={"luthiwd"}
        name={"Íñigo Muñoz"}
      /> 
      <TwitterFollowCard
        initialIsFollowing
        userName={"midudev"}
        name={"Miguel Ángel Durán"}
      />
    </section>
  );
}
