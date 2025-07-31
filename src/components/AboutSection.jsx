import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Cover Letter</h3>

            <p className="text-muted-foreground">
              I am a recent computer science graduate with a strong interest in
              front-end development and hands-on experience building responsive
              web applications using React, JavaScript, HTML, and CSS. I've had
              experience in working with REST APIs and version control tools
              like Git, with exposure to development cycles and collaborative
              team projects. Although I am new to the the professional industry,
              I am eager to learn and provide value to a team again.
            </p>
            <p className="text-muted-foreground">
              Outside of academics, I enjoy Houston's vibrant food scene as well
              as staying in and playing board games with friends. During my free
              time in college, I developed a keen interest in bouldering and
              it's been a great way to stay active and challenge myself both
              physically and mentally.
            </p>
            <p className="text-muted-foreground">
              While I am preferably seeking a web developer role, I am happy to
              explore new opportunities where I can continue learning
              ,contributing to real-world applications, and growing within a
              supportive, team-oriented environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Academic Experience</h4>
                  University of Houston
                  <br /> Bachelor of Science, Fall 2024
                  <br /> Majoried in Computer Science
                  <br />
                  Minored in Mathematics
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Academic experience with React, Node.js, Tailwind.css,
                    Javascript, HTML, CSS, SQL, Git, MySQL, MongoDB, PostMan,
                    Postgres, Azure, REST APIs, Jest, Vite, Python, and Flask
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Mobile App Development
                  </h4>
                  <p className="text-muted-foreground">
                    Personal projects using Swift, Postgres, Firebase, SQLite,
                    and XCode
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
