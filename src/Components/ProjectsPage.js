import React from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/layout'
import ProjectsObj from './ProjectsObj'
import ProjectCard from './ProjectCard'

function ProjectsPage() {
  return (
    <React.Fragment>
      <Flex className="projects-page">
        <Box>
          <Heading as="h1">All</Heading>
          &nbsp;
          <Heading bgGradient="linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)" bgClip="text" as="h1">Projects</Heading>
          <Flex className='projects-list'>
            {ProjectsObj.map((projectObj) => {
              return <ProjectCard img1={projectObj.img1} img2={projectObj.img2} text={projectObj.text} links={projectObj.links}></ProjectCard>
            })}
          </Flex>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default ProjectsPage