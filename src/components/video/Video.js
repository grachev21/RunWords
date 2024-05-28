import './styles.css'
import video from '../../assets/video/video.webm'


export default function Video() {
    return (
            <video className='video-background' src={video} autoPlay muted />
    )
    
}