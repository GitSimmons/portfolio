import styled from 'styled-components';
import React from 'react';
import { Project } from '../data/projects';
import Description from './Description'
import Scroller from './Scroller'

const StyledProject = styled.div`
  background-image: ${(props): string => props.theme.colors.gradient};
  margin-top: 1rem;
  color: ${(props): string => props.theme.colors.textColor};
  padding: 1rem;
  header {
    display: flex;
    align-items: center;
    margin-bottom: 0.62em;
    width: 100%;
    position: relative;
  }
  h3 {
    display: block;
    margin: 0;
    font-size: 5vw;
    @media (min-width: 900px) {
      font-size: 3.5rem;
    }
    font-family: 'Kumar One Outline', cursive;
  }
  header:after {
    content: '';
    flex: auto;
    display: inline-block;
    height: 0.1rem;
    margin-left: 1rem;
    background-color: ${(props): string => props.theme.colors.textColor};
  }
  a,
  span,
  button {
    text-transform: uppercase;
    background-color: ${(props): string => props.theme.colors.background};
    text-decoration: none;
    color: ${(props): string => props.theme.colors.buttonColor};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
  ul {
    text-transform: uppercase;
    list-style-type: none;
    color: ${(props): string => props.theme.colors.inactiveColor};
    padding-inline-start: 0px;

    li {
      display: inline-block;
      &:not(:last-child) {
        &:after {
          content: '/';
          margin: 0 0.5rem;
        }
      }
    }
  }
`;

const ProjectComponent: React.FC<Project> = ({
  description,
  lead,
  links,
  title,
  tools,
  views,
}: Project) => {
  return (
    <StyledProject>
      <header id={title}>
        <h3>{title}</h3>
      </header>
      <Scroller views={views} />
      <ul>{tools && tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
      <h4>Description</h4>
      <p>{lead}</p>
      {description && <Description>{description}</Description>}
      <h4>Links</h4>
      <ul>
        {links &&
          links.map((link) => (
            <li key={link.name}>
              {link.href ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              ) : (
                  link.name
                )}
            </li>
          ))}
      </ul>
    </StyledProject >
  );
};
export default ProjectComponent;
