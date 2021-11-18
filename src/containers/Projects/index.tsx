import Footer from "../../components/Footer";
import { projects } from "../../utils/constants";

import { Container, Content } from "../../styled/Global";

import * as Styled from "./styled";

function Projects() {
  return (
    <Container>
      <Content>
        <h1>Proyectos</h1>
        <Styled.ProjectsContainer>
          {projects.map((project, index) => (
            <Styled.ProjectCard $backgroundImage={project.image}>
              <Styled.ProjectLink>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <h4>{project.title}</h4>
                  <Styled.ProjectType>{project.type}</Styled.ProjectType>
                  <Styled.ProjectTech>
                    {project.technologies}
                  </Styled.ProjectTech>
                </a>
              </Styled.ProjectLink>
            </Styled.ProjectCard>
          ))}
        </Styled.ProjectsContainer>

        <Footer />
      </Content>
    </Container>
  );
}

export default Projects;
