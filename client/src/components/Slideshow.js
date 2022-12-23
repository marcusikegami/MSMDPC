const One = 'https://scholl-static-images.s3.us-west-2.amazonaws.com/1.jfif';
const Two = 'https://scholl-static-images.s3.us-west-2.amazonaws.com/2.jfif';
const Three = 'https://scholl-static-images.s3.us-west-2.amazonaws.com/3.jfif';
const Four = 'https://scholl-static-images.s3.us-west-2.amazonaws.com/4.jfif';
const Five = 'https://scholl-static-images.s3.us-west-2.amazonaws.com/5.jfif';
const morocco = 'https://scholl-static-images.s3.us-west-2.amazonaws.com/morocco.jfif';
const ultra = 'https://scholl-static-images.s3.us-west-2.amazonaws.com/ultra.jfif';


const Slideshow = () => {
    // const [slideshow] = useEffect();
    if(
        document.getElementById('slideshow-container')
    ) {
        let slideIndex = 0;
        showSlides();
    
        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 5500); // Change image every 2 seconds
        }
    }
    
    return (
    <div id='slideshow-wrapper'>
        <div id='slideshow-container'>
            <div className="mySlides fade">
                <img src={One} alt="caption" />
            </div>
            <div className="mySlides fade">
                <img src={Two} alt="caption" />
            </div>
            <div className="mySlides fade">
                <img src={Three} alt="caption" />
            </div>
            <div className="mySlides fade">
                <img src={Four} alt="caption" />
            </div>
            <div className="mySlides fade">
                <img src={Five} alt="caption" />
            </div>
            <div className="mySlides fade">
                <img src={morocco} alt="caption" />
            </div>
            <div className="mySlides fade">
                <img src={ultra} alt="caption" />
            </div>
            </div>
            <br />
            <div className="text-center">
            </div>
    </div>
    )
}

export default Slideshow;