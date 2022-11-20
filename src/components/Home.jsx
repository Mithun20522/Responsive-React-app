import React from 'react'
import vg from "../images/2.webp";
import {AiFillGoogleCircle , AiFillAmazonCircle, AiFillYoutube , AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
        <div className="home" id='home'>
            <main>
                <h1>My web</h1>
                <p>Solution to all your Problems</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />

            <div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi et, 
                    eveniet minima asperiores facilis mollitia totam? Odio aliquam reprehenderit cum, 
                    quasi id fuga perferendis, quas repellendus ab vitae iure illum!
                </p>
            </div>
        </div>


        <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi et, 
                    eveniet minima asperiores facilis mollitia totam? Odio aliquam reprehenderit cum, 
                    quasi id fuga perferendis, quas repellendus ab vitae iure illum!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi et, 
                    eveniet minima asperiores facilis mollitia totam? Odio aliquam reprehenderit cum, 
                    quasi id fuga perferendis, quas repellendus ab vitae iure illum!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi et, 
                    eveniet minima asperiores facilis mollitia totam? Odio aliquam reprehenderit cum, 
                    quasi id fuga perferendis, quas repellendus ab vitae iure illum!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi et, 
                    eveniet minima asperiores facilis mollitia totam? Odio aliquam reprehenderit cum, 
                    quasi id fuga perferendis, quas repellendus ab vitae iure illum!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi et, 
                    
                </p>
            </div>
        </div>

        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>

                <article>
                    <div style={{animationDelay: "0.3s"}}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style={{animationDelay: "0.5s"}}>
                        <AiFillAmazonCircle/>
                        <p>Amazone</p>
                    </div>
                    <div style={{animationDelay: "0.7s"}}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>
                    <div style={{animationDelay: "1s"}}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>

        </>
  )
}

export default Home