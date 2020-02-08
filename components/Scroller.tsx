
import { useRef } from 'react'
import styled from 'styled-components'
import { View } from '../data/projects';

interface Views {
  views: View[]
}

/* The size of the images in this container are based on font-size. We set font-size based on vw,
   scale images to height=1em and w=(aspectRatio)em. Here's how we derive our maximum font-size.
   With aspect ratios of [1.79, 0.77, 0.58] we have a sum of 3.14, which means that for 100 vw,
   we would have (100/3.14)=~31vw as a max height.
   The container is 90vw - width of the table of contents, and has padding of 1rem on each side
   and ideally two flex gutters of ~0.5rem between the three carousels.

   Incidentally, for media breakpoints, images with a height of 500px will work well up until
   (3.14*500px) = 1570px, so about 1600px with margins and padding. At 1920x1080 this works,
   but for a 2560x1440 and 3840 x 2160, we will likely need 1000px height, for a max
   width of 3140px. A 90vw container on 3840 is 3456 px, and an 80vw would be 3072px.
*/
const ScrollerContainer = styled.div`
  font-size: calc(((90vw - 225px) / 3.14) - 0.5rem);
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    font-size: calc((90vw / 1.78) - 0.5rem);
    div:not(:first-child) {
      display: none;
      img {
        display: none;
      }
    }
  }
`;
const ScrollBarHider = styled.div`
  --scrollbar_width: 9px;
  height: 1em;
  width: ${(props): string =>
    props.aspect ? `calc(${props.aspect} - var(--scrollbar_width))` : '100%'};
  overflow: hidden;
`;
const StyledImageScroller = styled.div`
  height: 100%;
  position: relative;
  width: ${(props): string =>
    props.aspect ? `calc(${props.aspect} + var(--scrollbar_width))` : '100%'};
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: auto;
`;
const ImageWrapper = styled.div`
  scroll-snap-align: start;
  pointer-events: none;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;


type ImageScrollerProps = {
  children: React.ReactNode;
  aspect: string;
};

const ImageScroller: React.FC<ImageScrollerProps> = ({ children, aspect }: ImageScrollerProps) => {
  return (
    <ScrollBarHider aspect={aspect}>
      <StyledImageScroller aspect={aspect}>{children}</StyledImageScroller>
    </ScrollBarHider>
  );
};

const Scroller: React.FC<Views> = ({ views }: Views) => {
  const largeCloudinaryPreset = 'f_auto';
  const smallCloudinaryPreset = 'c_scale,f_auto,h_500';
  const largeCloudinaryBaseURL = `https://res.cloudinary.com/acloudforben/image/upload/${largeCloudinaryPreset}/v1580502179/portfolio`;
  const smallCloudinaryBaseURL = `https://res.cloudinary.com/acloudforben/image/upload/${smallCloudinaryPreset}/v1580502179/portfolio`;
  const aspectRatios = {
    desktop: '1.79em',
    tablet: '0.77em',
    mobile: '0.58em',
  };
  const aspectRatioNumbers = {
    desktop: 1.79,
    tablet: 0.77,
    mobile: 0.58,
  };
  const formats = Object.keys(aspectRatios);
  const imageRefs = views.reduce((acc, view) => {
    // eslint-disable-next-line no-return-assign
    formats.map((format) => (acc[view.name + format] = useRef()));
    return acc;
  }, {});
  const handleClick = (name: View["name"]): void => {
    // For each format, scroll the parent container of a given screenshot to the screenshot's ref.
    formats.map((format) => {
      // A quick polyfill for Edge, if ScrollTo doesn't exist, use ScrollIntoView
      if (!imageRefs[name + format].current.parentElement.scrollTo) {
        return imageRefs[name + format].current.scrollIntoView();
      }
      // scrollTo because Chrome has a bug where it can only smooth animate 1 scrollIntoView
      return imageRefs[name + format].current.parentElement.scrollTo({
        top: imageRefs[name + format].current.offsetTop,
        behavior: 'smooth',
      });
    });
  };
  return (
    <>
      <ScrollerContainer>
        {formats.map((format) => (
          <ImageScroller aspect={aspectRatios[format]} key={aspectRatios[format]}>
            {views.map(
              (view) =>
                view[format] && (
                  <ImageWrapper
                    ref={imageRefs[view.name + format]}
                    key={view.name + view[format]}
                  >
                    <img
                      src={largeCloudinaryBaseURL + view[format]}
                      srcSet={`
                ${smallCloudinaryBaseURL + view[format]} ${aspectRatioNumbers[format] *
                        500}w,
                ${largeCloudinaryBaseURL + view[format]} ${aspectRatioNumbers[format] *
                        1000}w
              `}
                      sizes={`
              (max-width: 1980px) ${aspectRatioNumbers[format] * 500}px,
              ${aspectRatioNumbers[format] * 1000}px
              `}
                      alt={`${view.name}on${format}`}
                    />
                  </ImageWrapper>
                )
            )}
          </ImageScroller>
        ))}

      </ScrollerContainer>
      <ul>
        {views.map((view) => (
          <li key={view.name}>
            <button type="button" onClick={(): void => handleClick(view.name)}>
              {view.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Scroller
