import './intro.css';
import Me from '../../img/person4.png'
const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Sher Janmathong</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Backend-Developer</div>
                        <div className="i-title-item">Writer</div>
                        <div className="i-title-item">Reader</div>
                        <div className="i-title-item">Self-Learner</div>
                    </div>
                </div>
                <p className="i-desc">
                    I design and develop service for customers of all sizes,
                    specializeing in creating easy-to-use, fast and secure crypto-payment 
                    microservice.
                </p>
            </div>
            
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="me" className="i-img" />
        </div>
    </div>
  )
}

export default Intro;
