import './UseCasesComponent.css'
import { UseCaseData } from '../../Data/UseCaseData'
export default function UseCasesComponent({reverse}) {
    return (
        <>
            <div className= { reverse?'Af-UseCasesComponentReverse ': 'Af-UseCasesComponent'}>
                <div className={ reverse?'Af-UseCasesComponentSide-1Reverse ': 'Af-UseCasesComponentSide-1'} >
                    <div className='Af-cardTop'>
                        <div className='Af-UseCasesComponentSide-1-card'>
                            <div className='Af-UseCasesComponentSide-1-card-img'>
                                <div>
                                    {!reverse&&<img src={UseCaseData[0].properities[0].icon}alt="" />}
                                    {reverse&&<img src={UseCaseData[1].properities[0].icon}alt="" />}
                                </div>
                            </div>
                            {!reverse&&<span>{UseCaseData[0].properities[0].desc}</span>}
                            {reverse&&<span>{UseCaseData[1].properities[0].desc}</span>}
                        </div>
                        <div className='Af-UseCasesComponentSide-1-card'>
                            <div className='Af-UseCasesComponentSide-1-card-img'>
                                <div>
                                {!reverse&&<img src={UseCaseData[0].properities[1].icon}alt="" />}
                                {reverse&&<img src={UseCaseData[1].properities[1].icon}alt="" />}
                                </div>
                            </div>
                            {!reverse&&<span>{UseCaseData[0].properities[1].desc}</span>}
                            {reverse&&<span>{UseCaseData[1].properities[1].desc}</span>}
                        </div>
                    </div>
                    <div className='Af-cardBottom'>
                        <div className='Af-UseCasesComponentSide-1-card'>
                            <div className='Af-UseCasesComponentSide-1-card-img'>
                                <div>
                                {!reverse&&<img src={UseCaseData[0].properities[2].icon}alt="" />}
                                {reverse&&<img src={UseCaseData[1].properities[2].icon}alt="" />}
                                </div>
                            </div>
                            {!reverse&&<span>{UseCaseData[0].properities[2].desc}</span>}
                            {reverse&&<span>{UseCaseData[1].properities[2].desc}</span>}
                        </div>
                        <div className='Af-UseCasesComponentSide-1-card'>
                            <div className='Af-UseCasesComponentSide-1-card-img'>
                                <div>
                                {!reverse&&<img src={UseCaseData[0].properities[3].icon}alt="" />}
                                {reverse&&<img src={UseCaseData[1].properities[3].icon}alt="" />}
                                </div>
                            </div>
                            {!reverse&&<span>{UseCaseData[0].properities[3].desc}</span>}
                            {reverse&&<span>{UseCaseData[1].properities[3].desc}</span>}
                        </div>
                    </div>
                </div>
                <div className='Af-UseCasesComponentSide-2' >
                    <div className='Af-UseCasesComponentSide-2-title'>
                        {!reverse&&<h4 className='fs-30'>{UseCaseData[0].heading.title}</h4>}
                        {reverse&&<h4 className='fs-30'>{UseCaseData[1].heading.title}</h4>}
                        {!reverse&&<p>{UseCaseData[0].heading.desc}</p>}
                        {reverse&&<p>{UseCaseData[1].heading.desc}</p>}
                    </div>
                    <div className='Af-UseCasesComponentSide-2-secondDiv'>
                        <div className='Af-rate Af-divBorder'>
                            {!reverse&&<h3>{UseCaseData[0].rating[0].number}</h3>}
                            {reverse&&<h3>{UseCaseData[1].rating[0].number}</h3>}
                            {!reverse&&<p>{UseCaseData[0].rating[0].desc}</p>}
                            {reverse&&<p>{UseCaseData[1].rating[0].desc}</p>}
                        </div>
                        <div className='Af-rate Af-divBorder'>
                        {!reverse&&<h3>{UseCaseData[0].rating[1].number}</h3>}
                        {reverse&&<h3>{UseCaseData[1].rating[1].number}</h3>}
                        {!reverse&&<p>{UseCaseData[0].rating[1].desc}</p>}
                        {reverse&&<p>{UseCaseData[1].rating[1].desc}</p>}
                        </div>
                        <div className='Af-rate'>
                        {!reverse&&<h3>{UseCaseData[0].rating[2].number}</h3>}
                        {reverse&&<h3>{UseCaseData[1].rating[2].number}</h3>}
                        {!reverse&&<p>{UseCaseData[0].rating[2].desc}</p>}
                        {reverse&&<p>{UseCaseData[1].rating[2].desc}</p>}
                        </div>
                    </div>
                    <div className='Af-UseCasesComponentSide-2-button'>
                        <button className='Btn'>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}