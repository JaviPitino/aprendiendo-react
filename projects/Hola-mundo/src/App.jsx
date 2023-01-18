
import "./app.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

  const users = [
    {
      userName: 'JaviPitino',
      name: 'Javi Pitino',
      isFollowing: true
    },
    {
      userName: 'luthiwd',
      name: 'Íñigo Muñoz',
      isFollowing: false
    },
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'jorgeberrizbeitia',
      name: 'Jorge Berrizbeitia',
      isFollowing: true
    }
  ]

  return (
    <article className="App">
      {
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}
            />
          )
        })
      }
    </article>
  );
}
