import styled from "styled-components";
import React from "react";
const StyledProject = styled.div`
  background-image: radial-gradient(circle at left, #fff, #ddd);
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
    font-size: 3.5rem;
    /* text-transform: uppercase; */
    font-family: "Kumar One Outline", cursive;
  }
  header:after {
    content: "";
    flex: auto;
    display: inline-block;
    height: 0.1rem;
    margin-left: 1rem;
    background-color: #000;
  }
  a,
  button {
    text-decoration: none;
    color: #be5657;
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
    li {
      display: inline-block;
      &:not(:last-child) {
        &:after {
          content: "/";
          margin: 0 0.5rem;
        }
      }
    }
  }
  .views {
    color: #be5657;
  }
  .tools {
    color: #777;
  }
`;

/* The size of the images in this container are based on font-size. We set font-size based on view width,
   scale images to height=1em and w=(aspectRatio)em. Here's how we derive our maximum font-size. With 
   aspect ratios of [1.79, 0.77, 0.58] we have a sum of 3.14, which means that for 100 vw of a window,
   we would have (100/3.14)=~31vw as a max height.
   The container is 90vw, and has padding of 1rem on each side and ideally two flex gutters
   of 0.5rem between the three carousels.

   Incidentally, for media breakpoints, images with a height of 500px will work well up until
   (3.14*500px) = 1570px, so about 1600px with margins and padding. For 1920x1080 screens this is fine,
   but for a 2560x1440 and 3840 x 2160, we will likely need 1000px height, for a max
   width of 3140px. A 90vw container on 3840 is 3456 px, and an 80vw would be 3072px, so if we add a side
   bar of >10vw, the site should look fine.
*/
const ImageContainer = styled.div`
  font-size: calc((90vw / 3.14) - 0.5rem);
  display: flex;
  justify-content: space-between;

  /* div:not(:last-child) {
    margin-right: 0.5rem;
  } */
`;
const ScrollBarHider = styled.div`
  --scrollbar_width: 9px;
  height: 1em;
  width: ${props =>
    props.aspect ? `calc(${props.aspect} - var(--scrollbar_width))` : "100%"};
  overflow: hidden;
`;
const StyledImageCarousel = styled.div`
  height: 100%;
  position: relative;
  width: ${props =>
    props.aspect ? `calc(${props.aspect} + var(--scrollbar_width))` : "100%"};
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: auto;
`;
const ImageWrapper = styled.section`
  scroll-snap-align: start;
  pointer-events: none;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const Carousel = ({ children, aspect }) => {
  return (
    <ScrollBarHider aspect={aspect}>
      <StyledImageCarousel aspect={aspect}>{children}</StyledImageCarousel>
    </ScrollBarHider>
  );
};

const Project = ({ description, links, title, tools, views }) => {
  const aspectRatios = {
    desktop: "1.79em",
    tablet: "0.77em",
    mobile: "0.58em"
  };
  const formats = Object.keys(aspectRatios);

  //Create an object with refs for each format
  const screenshots = views.reduce((acc, value) => {
    formats.map(format => (acc[value.name + format] = React.createRef()));
    return acc;
  }, {});
  const handleClick = name =>
    //For each view, scroll the parent container of a given screenshot to the screenshot's ref.
    formats.map(format => {
      // A quick polyfill for Edge
      if (!screenshots[name + format].current.parentElement.scrollTo) {
        return screenshots[name + format].current.scrollIntoView();
      }
      //  scrollTo rather than scrollIntoView because Chrome has a bug where it can only smooth animate one scrollIntoView
      return screenshots[name + format].current.parentElement.scrollTo({
        top: screenshots[name + format].current.offsetTop,
        behavior: "smooth"
      });
    });
  return (
    <StyledProject>
      <header>
        <h3>{title}</h3>
      </header>
      <ImageContainer>
        {formats.map(format => (
          <Carousel aspect={aspectRatios[format]} key={aspectRatios[format]}>
            {views.map(view => (
              <ImageWrapper
                ref={screenshots[view.name + format]}
                key={view.name + view[format]}
              >
                <img src={view[format]} />
              </ImageWrapper>
            ))}
          </Carousel>
        ))}
      </ImageContainer>
      <ul className="views">
        {views.map(view => (
          <li key={view.name}>
            <button type="button" onClick={() => handleClick(view.name)}>
              {view.name}
            </button>
          </li>
        ))}
      </ul>
      <ul className="tools">
        {tools && tools.map(tool => <li key={tool}>{tool}</li>)}
      </ul>
      <h4>Description</h4>
      <p>{description}</p>
      <h4>Links</h4>
      <ul>
        {links &&
          links.map(link => (
            <li key={link.name}>
              {link.href ? (
                <a href={link.href} target="_blank">
                  {link.name}
                </a>
              ) : (
                link.name
              )}
            </li>
          ))}
      </ul>
    </StyledProject>
  );
};
export default Project;