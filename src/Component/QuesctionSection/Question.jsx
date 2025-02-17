import React from 'react'
import '../QuesctionSection/Question.scss'
import Linkimg from '../../assets/Line.png';
import Addimg from '../../assets/add.png';

const Question = () => {
  return (
    <div className='Question_section'>
      <h1 className='Question_section_title'>Frequently Ask Question</h1>
      <p className='Question_section_desc'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
      <div className='Answer'>
        <div className='answers_sec'>
          <div className='one'>
            <h1 className='ek'>Can I see who reads my email campaigns?</h1>
            <div className='line_img'>
              <img
                src={Linkimg}
                alt="Link img"
                id='line'
              />
            </div>
          </div>
          <p className='ek_ans'>Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.</p>
        </div>
        {
          [{
            "title": "Do you offer non-profit discounts?",
          }
            , {
            "title": "Can I see who reads my email campaigns?",
          },
          {
            "title": "Can I see who reads my email campaigns?",
          }
          ].map((info, index) => (
            <div className='second' key={index}>
              <li >
                <h1 className='ek_'>{info.title}</h1>
                </li>
                <img
                  src={Addimg}
                  alt="Add img"
                  className='line-line'
                />

            </div>
          ))

        }
      </div>
    </div>
  )
}

export default Question