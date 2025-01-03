import './AdSectionComponent.css'
import toRightDown from './../../assets/imgs/Abstract Design3.png'
import { Link } from 'react-router-dom'
import adSecBg from './../../assets/imgs/blend.png'
import TitleComponent from '../TitleComponent/TitleComponent'
export default function AdSectionComponent({DATA}) {
    return (
        <div className='AdSectionComponent px-162'>
            <div className="hw-AdSectionContent">
                <img src={adSecBg} className='hw-AdSecBg'/>
                <img src={toRightDown} className='toRightDown'/>
                <div className="hw-AdSecRight">
                    <TitleComponent
                    title={DATA.title}
                    desc={DATA.desc}
                    highlightedWords={['YourBank today!']}
                    />
                </div>
                <button className="hw-AdSecleft">
                    <Link to={'/signUp'}>
                        Open Account
                    </Link>
                </button>
            </div>
        </div>
    )
}

/*                
    <div className="hw-AdSecRight">
    <h3  className='fs-40 fw-400'>
        {DATA.title}<span>YourBank today!</span>
    </h3>
    <p className="hw-AdSecPara fw-300">
        {DATA.desc}
    </p>
    </div>
 */
