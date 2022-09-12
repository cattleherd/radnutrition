import './home.css'
import Diary from '../components/diary/diary'
import Topbar from '../components/topbar/topbar'

export default function Home(){
    return (
        <div className="Home-container">
            <Topbar/>
            <div className="Home-Wrapper">
                <Diary/>
            </div>
        </div>
    )
}