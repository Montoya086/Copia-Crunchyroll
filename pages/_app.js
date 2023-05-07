import './components/ImageSlider.scss'
import './components/SliderCard.scss'
import './index.scss';
import './components/Footer.scss'
import './components/SeriesSlider.scss'
export default function App ({Component, pageProps}){
    return(
        <>
            <Component {...pageProps}/>
        </>
    )
}