import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";
import profileImage from "./assets/49377882.jpeg";

const posts = [
  {
    id: 1,
    author: {
      avatarURL: `${profileImage}`,
      name: "Cinthia Pissetti",
      role: "Web Developer",
    },
    content: [
      { type: "first-title", content: "👋 Hello, world!" },
      { type: "second-title", content: "🤍 About me" },
      {
        type: "paragraph",
        content:
          "I'm Cinthia, passionate about tech, information, and communication.",
      },
      {
        type: "paragraph",
        content:
          "As a Front-end Developer, I have over three years of experience in creating user experiences for web applications that are user-friendly, responsive, and scalable. I am always eager to learn and improve skills, explore new challenges, and collaborate with others who share the passion and understanding for valuable purposes and good practices.",
      },
      {
        type: "paragraph",
        content:
          "I've had the opportunity to work on projects, either in the health and financial industry, where I could further enhance my experience. My expertise lies in JavaScript, React, Angular, Material Design, and other front-end technologies and frameworks. I also have a solid background in Information and Communication Technologies, with a degree from the Federal University of Santa Catarina and an exchange program in Canada. I have a keen interest in the intersection of psychology, design, and technology, and how they influence human behavior and society.",
      },
      {
        type: "paragraph",
        content:
          "🦋 Additionally, I've been polishing skills in problem-solving and assertive communication, increasing my understanding and perspectives.",
      },
      {
        type: "paragraph",
        content:
          "🐝 I'm passionate about research, collaboration, programming, and creativity!",
      },
      { type: "second-title", content: "🛠️ Tech Stacks" },
      {
        type: "hashtags",
        content:
          "#HTML5 #CSS3 #JavaScript #TypeScript #React #Angular #Vue.js #SASS #Less #StyledComponents #Material-UI #jQuery #Postgresql #Jest #Node.js #Markdown #Python #Slack #Jira #Notion #Trello #Postman #Discord #GitHub #LinkedIn",
      },
      { type: "second-title", content: "⭐ Get in touch" },
      {
        type: "paragraph",
        content:
          "If you have something beautiful to share with the world, I can help you with that.",
      },
      {
        type: "paragraph",
        content:
          "Interested in a collab? Im available for freelance side projects. Just say",
      },
      {
        type: "link",
        content: "olá!",
      },
    ],
    publishedAt: new Date("2024-04-04 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarURL: `${profileImage}`,
      name: "Cinthia Pissetti",
      role: "Web Developer",
    },
    content: [
      { type: "first-title", content: "👋 Hello, world!" },
      {
        type: "paragraph",
        content: "Have a nive day! Leave a motivational writing.",
      },
    ],
    publishedAt: new Date("2024-04-04 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
