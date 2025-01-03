import './UseCasesComponent.css'
import { UseCaseData } from '../../Data/UseCaseData'
import { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'

export default function UseCasesComponent({ reverse }) {
    const [counterState, setCounterState] = useState(false)

    const renderCard = (index) => (
        <div className='Af-UseCasesComponentSide-1-card' data-aos="flip-right" data-aos-delay="200">
            <div className='Af-UseCasesComponentSide-1-card-img'>
                <div>
                    <img src={UseCaseData[reverse ? 1 : 0].properities[index].icon} alt="icon" />
                </div>
            </div>
            <span>{UseCaseData[reverse ? 1 : 0].properities[index].desc}</span>
        </div>
    );

    return (
        <>
            <div className={reverse ? 'Af-UseCasesComponentReverse ' : 'Af-UseCasesComponent'}>
                <div className={reverse ? 'Af-UseCasesComponentSide-1Reverse ' : 'Af-UseCasesComponentSide-1'} data-aos="fade-left">
                    <div className='Af-cardTop'>
                        {renderCard(0)}
                        {renderCard(1)}
                    </div>
                    <div className='Af-cardBottom'>
                        {renderCard(2)}
                        {renderCard(3)}
                    </div>
                </div>
                <div className='Af-UseCasesComponentSide-2'>
                    <div className='Af-UseCasesComponentSide-2-title'>
                        <h4 className='fs-30' data-aos="fade-up">{UseCaseData[reverse ? 1 : 0].heading.title}</h4>
                        <p className='f-18 fw-300' data-aos="fade-up" data-aos-delay="200">{UseCaseData[reverse ? 1 : 0].heading.desc}</p>
                    </div>
                    <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                        <div className='Af-UseCasesComponentSide-2-secondDiv'>
                            <div className='Af-rate'>
                                {!reverse && <h3>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={78}
                                            duration={2.75}>
                                        </CountUp>
                                    }
                                    %</h3>}
                                {reverse && <h3>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={65}
                                            duration={2.75}>
                                        </CountUp>
                                    }
                                    %
                                </h3>}
                                {!reverse && <p className='f-18 fw-300'>{UseCaseData[0].rating[0].desc}</p>}
                                {reverse && <p className='f-18 fw-300'>{UseCaseData[1].rating[0].desc}</p>}
                            </div>
                            <div className='Af-divBorder'></div>
                            <div className='Af-rate'>
                                {!reverse && <h3>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={63}
                                            duration={2.75}>
                                        </CountUp>
                                    }
                                    %
                                </h3>}
                                {reverse && <h3>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={70}
                                            duration={2.75}>
                                        </CountUp>
                                    }
                                    %
                                </h3>}
                                {!reverse && <p>{UseCaseData[0].rating[1].desc}</p>}
                                {reverse && <p>{UseCaseData[1].rating[1].desc}</p>}
                            </div>
                            <div className='Af-divBorder'></div>
                            <div className='Af-rate'>
                                {!reverse && <h3>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={91}
                                            duration={2.75}>
                                        </CountUp>
                                    }
                                    %
                                </h3>}
                                {reverse && <h3>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={45}
                                            duration={2.75}>
                                        </CountUp>
                                    }
                                    %
                                </h3>}
                                {!reverse && <p>{UseCaseData[0].rating[2].desc}</p>}
                                {reverse && <p>{UseCaseData[1].rating[2].desc}</p>}
                            </div>
                        </div>
                    </ScrollTrigger>
                    <div className='Af-UseCasesComponentSide-2-button'>
                        <button className='Af-Btn'>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}