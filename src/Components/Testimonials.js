import React from 'react';
import '../Styles/Testimonials.css';
import Moe from '../Images/profile1.jpg';
import Sara from '../Images/profile2.jpg';
import Desmond from '../Images/profile3.jpg';
import Lindsey from '../Images/profile4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {
    const star =  <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}}/>
  return (
    <>
        <section className='reviews-container'>
            <h1 className='reviews-title'>
                Testimonials
            </h1>
            <div className='reviews-collection'>
                <div className='review-card'>
                    <img src={Moe} alt="young man" />
                    <div className='review-info'>
                        <h5>Moe</h5>
                        <p>The Bruchetta is AMAZING!</p>
                        <div>
                            {star}
                            {star}
                            {star}
                            {star}
                            {star}
                        </div>
                    </div>
                </div>
                <div className='review-card'>
                    <img src={Sara} alt="young woman" />
                    <div className='review-info'>
                        <h5>Sara</h5>
                        <p>So happy I found this place.</p>
                        <div>
                            {star}
                            {star}
                            {star}
                            {star}
                            {star}
                        </div>
                    </div>
                </div><div className='review-card'>
                    <img src={Desmond} alt="young man in red jacket" />
                    <div className='review-info'>
                        <h5>Moe</h5>
                        <p>You should try the Lemon Cake.</p>
                        <div>
                            {star}
                            {star}
                            {star}
                            {star}
                        </div>
                    </div>
                </div>
                <div className='review-card'>
                    <img src={Lindsey} alt="young man" />
                    <div className='review-info'>
                        <h5>Moe</h5>
                        <p>Will definitely eat here again.</p>
                        <div>
                            {star}
                            {star}
                            {star}
                            {star}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonials
