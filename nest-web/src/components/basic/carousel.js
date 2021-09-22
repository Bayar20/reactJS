import React from "react";
import { Carousel as CarouselContainer } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LeftWhiteChevronIcon, RightWhiteChevronIcon } from "../../assets";

export const Carousel = ({
  centerSlidePercentage,
  infiniteLoop,
  axis,
  children,
  autoPlay,
  center,
  dynamic,
  swipe,
  showThumb,
  showIndicators,
  transitionTime,
  width,
  showArrows,
  interval,
  showStatus
}) => {
  return (
    <CarouselContainer
      statusFormatter={(current, total) =>
        `Current slide: ${current} / Total: ${total}`
      }
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <div
            onClick={onClickHandler}
            style={{
              position: "absolute",
              zIndex: 2,
              top: "calc(50% - 15px)",
              left: 24,
              width: 20,
              height: 20,
              cursor: "pointer",
              border: "1px solid black"
            }}
          >
            <LeftWhiteChevronIcon width={11} height={16} />
          </div>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <div
            onClick={onClickHandler}
            style={{
              position: "absolute",
              zIndex: 2,
              top: "calc(50% - 15px)",
              right: 24,
              width: 20,
              height: 20,
              cursor: "pointer",
              border: "1px solid black"
            }}
          >
            <RightWhiteChevronIcon width={11} height={16} />
          </div>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{
                background: "#000",
                width: 8,
                height: 8,
                display: "inline-block",
                margin: "0 8px",
                border: "1px solid #142541",
                borderRadius: "4px"
              }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={{
              width: 8,
              height: 8,
              display: "inline-block",
              margin: "0 8px",
              border: "1px solid #142541",
              borderRadius: "4px"
            }}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
      axis={axis || "horizontal"} //Carousel ursax chiglel String utga
      centerMode={center ? true : false} //Center mode Boolean utga
      centerSlidePercentage={centerSlidePercentage ? centerSlidePercentage : 80} //Center mode in ezlex xuwi Number utga
      dynamicHeight={dynamic ? true : false} //Carousel dotorx itemnudin undurur xelberjix Boolean utga
      emulateTouch={swipe ? true : false} //Garaar swipe xiigddeg bolgox Boolean utga
      showIndicators={showIndicators ? true : false} //Indicator il gargax Boolean utga
      showThumbs={showThumb ? true : false} // Thumbs ig il gargax Boolean utga
      showArrows={showArrows ? true : false} // Arrow ig il gargax Boolean utga
      showStatus={showStatus ? true : false} // Carousel in status xarouulax Boolean utga
      autoPlay={autoPlay ? true : false} // Autoplay idewxijvvlex Boolean utga
      interval={interval ? interval : 3000} // Carousel in slide xoorond shiljex xugatsaa Number utga
      infiniteLoop={infiniteLoop ? true : false} // Xyzgaargvi vrgeljlex Carousel Boolean utga
      transitionTime={transitionTime ? transitionTime : 1500} // Carousel in Slide xoorond shiljex animationi xugatsaa Number utga
      width={width ? width : "100%"} // Carousel in urt
    >
      {children}
    </CarouselContainer>
  );
};
