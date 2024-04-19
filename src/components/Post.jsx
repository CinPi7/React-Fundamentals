import styles from "./Post.module.css";
import profileImage from "./../assets/49377882.jpeg";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <div>
      <article className={styles.post}>
        <header className={styles.header}>
          <div className={styles.author}>
            <Avatar src={profileImage} />

            <div className={styles.authorInfo}>
              <strong>Cinthia Pissetti</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time title="11 de Maio às 11:13" dateTime="2022-05-11 08:00:10">
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <h1>👋 Hello, world!</h1>
          <h2>🤍 About me</h2>
          <p>
            I&apos;m Cinthia, passionate about tech, information, and
            communication.
          </p>

          <p>
            My childhood was in a small city in Brazil, a peaceful place to
            live, which led me to grow and develop a special affection for
            technology.
          </p>

          <h2>🚀 My Experience</h2>
          <p>
            As a Front-end Developer, I have over three years of experience in
            creating user experiences for web applications that are
            user-friendly, responsive, and scalable. I am always eager to learn
            and improve skills, explore new challenges, and collaborate with
            others who share the passion and understanding for valuable purposes
            and good practices.
          </p>

          <p>
            I&apos;ve had the opportunity to work on projects, either in the
            health and financial industry, where I could further enhance my
            experience. My expertise lies in JavaScript, React, Angular,
            Material Design, and other front-end technologies and frameworks. I
            also have a solid background in Information and Communication
            Technologies, with a degree from the Federal University of Santa
            Catarina and an exchange program in Canada. I have a keen interest
            in the intersection of psychology, design, and technology, and how
            they influence human behavior and society.
          </p>

          <p>
            🦋 Additionally, I&apos;ve been polishing skills in problem-solving
            and assertive communication, increasing my understanding and
            perspectives.
          </p>

          <p>
            🐝 I&apos;m passionate about research, collaboration, programming,
            and creativity!
          </p>

          <h2> 🛠️ Tech Stacks</h2>
          <p className={styles.bold}>
            <em>
              #HTML5 #CSS3 #JavaScript #TypeScript #React #Angular #Vue.js #SASS
              #Less #StyledComponents #Material-UI #jQuery #Postgresql #Jest
              #Node.js #Markdown #Python #Slack #Jira #Notion #Trello #Postman
              #Discord #GitHub #LinkedIn
            </em>
          </p>

          <h2>⭐ Get in touch</h2>
          <p>
            If you have something beautiful to share with the world, I can help
            you with that.
          </p>

          <p>
            Interested in a collab? Im available for freelance side projects.
            Just say &quot;<a href="#">olá</a>&quot;!.
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>
            Introduce yourself and leave your request and contact information in
            the form below:
          </strong>
          <textarea placeholder="Leave a comment" />

          <div className={styles.sendButton}>
            <button type="submit">Send</button>
          </div>
        </form>

        <div className="commentList">
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </div>
  );
}
