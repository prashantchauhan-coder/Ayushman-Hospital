import React, { useState } from 'react'
import '../QuesctionSection/Question.scss'
// import Linkimg from '../../assets/Line.png';
import Addimg from '../../assets/add.png';
import mineus from '../../assets/mineus.png'

const Question = () => {

  const [showAnswer, setShowAnswer] = useState(null)
  const [showAns, setShowAns] = useState(false)

  const handleShow = () => {
    setShowAns(!showAns)
  }

  const togleButton = (index) => {
    setShowAnswer(showAnswer === index ? null : index)
  }

  const faqData = [
    {
      title: "Do you offer non-profit discounts?",
      answer: "Yes, we provide special discounts for non-profits."
    },
    {
      title: "Can I see who reads my email campaigns?",
      answer: "Yes, you can track email opens and clicks."
    },
    {
      title: "How do I reset my password?",
      answer: "You can reset your password from the settings page."
    }
  ];
  return (
    <div className='Question_section'>
      <h1 className='Question_section_title'>Frequently Ask Question</h1>
      <p className='Question_section_desc'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
      <div className='Answer'>
        <div className='answers_sec'>
          <div className='one'>
            <h1 className='ek'>Can I see who reads my email campaigns?</h1>
            <img
              src={showAns ? mineus : Addimg}
              alt="Link img"
              id='line' onClick={handleShow}
            />
          </div>
          {showAns && <p className='ek_ans'>Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.</p>}
        </div>
        {faqData.map((info, index) => (
          <div className='maindiv' key={index}>
            <div className='second' >
              <li style={{listStyle:"none"}}>
                <h1 className='ek_'>{info.title}</h1>
              </li>
              <img
                src={showAnswer === index ? mineus : Addimg}
                alt="Add img"
                className='line-line' onClick={() => togleButton(index)}
              />
            </div>
            {showAnswer === index && <p className="answer">{info.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question;