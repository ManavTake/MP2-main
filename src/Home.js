// Home.js

import React from 'react';
import './Home.css';
import ngoAD from './images/logo.png';
import ad1 from './images/ad.png';
import ad2 from './images/apple.jpg';
import ad3 from './images/Digital_Marketing.png';
import ad4 from './images/makemytrip.avif';
import ad5 from './images/bike.jpg';
import ImageComponent from './imagecomponent'; // Import ImageComponent

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Mini Project 2</h1>
        <h2>The application of data science in enhancing advertisement reach</h2>
        <p>Balancing targeted advertising benefits with the need to respect consumer privacy</p>
      </header>

      <br></br>
      <section className="Home-section">
        <h2>About Us</h2>
        <p>
        We are a team of four passionate Computer Science engineering students: Manav, Harshala, Namya, and Pallavi. 
        With a shared enthusiasm for data science and its applications, we have come together to work on a project that leverages data science 
        to enhance advertisement reach. Our diverse skill sets and collaborative spirit drive us to innovate and find 
        solutions that balance technological advancement with ethical considerations.
        </p>
      </section>

      <br></br>
      <section className="Home-section">
        <h2>Our Mission</h2>
        <p>
        Our mission is to harness the power of data science to revolutionize targeted advertising. We aim to create models that not only 
        maximize advertising benefits for businesses but also prioritize and respect consumer privacy. By integrating advanced data analytics 
        with ethical practices, we strive to set a new standard in the advertising industry, ensuring that consumer trust and business success go hand in hand.
        </p>
      </section>

      <br></br>
      <section className="Home-section">
        <h2>Project Overview</h2>
        <p>
        In today's digital age, big companies use personal data from phones, websites visited, and even texts to deliver targeted advertisements. 
        While this practice enhances advertising effectiveness, it raises significant data breach and privacy concerns. Our project aims to address 
        this issue by utilizing <b>Federated Learning</b>—a revolutionary machine learning technique designed to train algorithms across decentralized devices while keeping all the training data local.
        </p>
        <br></br>
        <h4>Benefits of our model :</h4>
        <ol className='List'>
          <li><b>Enhanced Privacy Protection:</b> Training data remains on local devices, significantly reducing the risk of data breaches and misuse.</li>
          <li><b>Improved Consumer Trust:</b> By respecting user privacy, our solution enhances consumer trust in digital advertising practices.</li>
          <li><b>Effective Advertising:</b> Combining user data from advertisers and app-related activities improves targeting accuracy, leading to better ad performance.</li>
          <li><b>Increased Click-Through Rates (CTR):</b> Significant improvements in CTR indicate more relevant ads being shown to users.</li>
          <li><b>Reduced Cost per Action (CPA):</b> Enhanced targeting accuracy leads to more efficient ad spend, reducing the overall CPA.</li>
          <li><b>Reduced Centralized Storage Risks:</b> By avoiding centralized data storage, we mitigate risks associated with data breaches and misuse</li>
        </ol>
      </section>

      <br></br>
      <br></br>
      <h2>Our Work in Action (Ads) </h2>
      <section className="image-gallery">
        
        <div className="image-container">
          <ImageComponent imageUrl={ngoAD} />
        </div>
        <div className="image-container">
          <ImageComponent imageUrl={ad1} />
        </div>
        <div className="image-container">
          <ImageComponent imageUrl={ad2} />
        </div>
        <div className="image-container">
          <ImageComponent imageUrl={ad3} />
        </div>
        <div className="image-container">
          <ImageComponent imageUrl={ad4} />
        </div>
        <div className="image-container">
          <ImageComponent imageUrl={ad5} />
        </div>
      </section>
    </div>
  );
}

export default Home;
