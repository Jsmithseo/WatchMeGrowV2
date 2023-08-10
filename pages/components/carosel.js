// components/CustomCarousel.js

import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';



// const BannerStyles = {
//     backgroundColor: "rgba(255, 0, 0, 0.3)",
//     color: "#fff",
//     textAlign: "center",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
  
//   }

const items = [
    {
        src: '/path/to/first-image.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1 Caption'
    },
    {
        src: '/path/to/second-image.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2 Caption'
    },
    {
        src: '/path/to/third-image.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3 Caption'
    }
];

function CustomCarousel() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} width="100%" />
                <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default CustomCarousel;
