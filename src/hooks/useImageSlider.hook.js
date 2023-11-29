import { useEffect, useState } from "react";
import { debounce, isClient } from "../helper/helper";

const useImageSlider = (imgs,ref,type,gap,currentImg) => {

    const [scrollConfig, setScrollConfig] = useState({
        shouldHandleScrolling : true,
        imgIndex : currentImg
    })
    const remToPx = isClient ? parseFloat(window.getComputedStyle(document.documentElement).fontSize) : null
    const _gap = scrollConfig.imgIndex ?  remToPx * parseFloat(gap || 0) : 0
    
    const {imgIndex : currentIndex} = scrollConfig

    useEffect(() => {
        if (!ref || !scrollConfig.shouldHandleScrolling) return;
        switch (type) {
            case "horizontal":
                const calculatedTransform = `translateX(calc(-${(ref.children[currentIndex].getBoundingClientRect().width) * currentIndex}px - ${_gap}px))`;
                ref.style.transform = calculatedTransform
                break;
            case "vertical":
              ref.scrollTop = ((currentIndex) * ( window.innerHeight + _gap))
              break;
        }
    },[scrollConfig])


    const handleSlideButtons = (e) => {
        const position = e.currentTarget.getAttribute("data-position");
        switch (position) {
            case "left":
                setScrollConfig({
                    imgIndex :  currentIndex === 0 ? imgs.length - 1 : currentIndex - 1,
                    shouldHandleScrolling : true
                });
            break;
            case "right":
                setScrollConfig({
                    imgIndex : currentIndex >= imgs.length - 1 ? 0 : currentIndex + 1,
                    shouldHandleScrolling : true
                });
            break;
        }
    }

    const handleDotClick = (img) => setScrollConfig({
        imgIndex : img,
        shouldHandleScrolling : true
    })



        const cb = (e) => {
            setScrollConfig({
                shouldHandleScrolling : false,
                imgIndex : Math.floor((e.target.scrollTop / (window.innerHeight + _gap)) + 0.80)
            })
        }


        const debouncedScrollHandler = debounce(cb,500)


    return { handleSlideButtons,handleDotClick ,currentIndex ,debouncedScrollHandler}
}

export default useImageSlider;