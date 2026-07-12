import useEmblaCarousel from "embla-carousel-react";
import styles from './PhotoCarousel.module.css';
import { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

interface PhotoCarouselProps {
    imagesUrls: string[]
}

export function PhotoCarousel(props: PhotoCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    const updateCounter = useCallback((api: EmblaCarouselType) => {
        if (!api) return;
        setCurrentIndex(api.selectedScrollSnap());
        setTotalSlides(api.scrollSnapList().length);
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        updateCounter(emblaApi);
        
        emblaApi.on("select", updateCounter);
        emblaApi.on("reInit", updateCounter);

        return () => {
            emblaApi.off("select", updateCounter);
            emblaApi.off("reInit", updateCounter);
        };
    }, [emblaApi, updateCounter]);

    
    return (
        <div className={styles.embla}>
            <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    { props.imagesUrls.length > 0 && props.imagesUrls.map((imageUrl, index) =>
                        <div className={styles.emblaSlide} key={index}>
                            <img src={imageUrl} alt="" />
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.controls}>
                <div className={styles.buttons}>
                    <button className={styles.emblaPrev} onClick={scrollPrev} />
                    <button className={styles.emblaNext} onClick={scrollNext} />
                </div>

                {totalSlides > 0 && (
                    <div className={styles.counter}>
                        {currentIndex + 1} / {totalSlides}
                    </div>
                )}
            </div>
        </div>
    );
}