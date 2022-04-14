import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div id="title">Ground Y NFT Marketplace</div>
      <h1>Why Ground Y?</h1>
      <div className="about">
        <div>
          <ul>Mint your NFT</ul>
          <li id="desc1">
            <div className="description">Upload your image</div>
            <img src="images/description1.png" alt="" height="300"></img>
          </li>
          <li id="desc2">
            <img src="images/description2.png" alt="" height="300"></img>
            <div className="description">Add a title and description</div>
          </li>
          <li id="desc3">
            <div className="description">
              Customize your NFTs with properties
            </div>
            <img src="images/description3.png" alt="" height="300"></img>
          </li>
        </div>
        <ul>Check your NFT</ul>
        <ul>Send your NFT</ul>
      </div>
      <h1>Who Made?</h1>
      <div className="team">
        <div className="teammembers">
          <img src="images/kwon.svg" alt="" height="200" width="200"></img>
          <span className="name">Kwon</span>
          <ul>Team Leader</ul>
          <li>Project Setup, Management</li>
          <li>Minting Page Implement</li>
          <a
            href="https://github.com/Robin-the-dev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/GitHub-Mark-64px.png"
              alt=""
              height="20"
              width="20"
            ></img>
          </a>
          <span>&nbsp;</span>
          <img src="images/Linkedin_logo.png" alt="" height={20}></img>
          <span>&nbsp;</span>
          <img src="images/Instagram_logo.png" alt="" height={20}></img>
        </div>
        <div className="teammembers">
          <img src="images/baek.svg" alt="" height="200" width="200"></img>
          <span className="name">Baek</span>
          <ul>Team Member</ul>
          <li>Page Routing</li>
          <li>Tokenlist Page Implement</li>
          <a href="https://github.com/BEB03" target="_blank" rel="noreferrer">
            <img
              src="images/GitHub-Mark-64px.png"
              alt=""
              height="20"
              width="20"
            ></img>
          </a>
          <span>&nbsp;</span>
          <img src="images/Linkedin_logo.png" alt="" height={20}></img>
          <span>&nbsp;</span>
          <img src="images/Instagram_logo.png" alt="" height={20}></img>
        </div>
        <div className="teammembers">
          <img src="images/yang.svg" alt="" height="200" width="200"></img>
          <span className="name">Yang</span>
          <ul>Team Member</ul>
          <li>Deploy Smart Contract</li>
          <li>Home Page Implement</li>
          <a href="https://github.com/wh7787" target="_blank" rel="noreferrer">
            <img
              src="images/GitHub-Mark-64px.png"
              alt=""
              height="20"
              width="20"
            ></img>
          </a>
          <span>&nbsp;</span>
          <img src="images/Linkedin_logo.png" alt="" height={20}></img>
          <span>&nbsp;</span>
          <img src="images/Instagram_logo.png" alt="" height={20}></img>
        </div>
      </div>
      <h1>Partners</h1>
      <div className="partner">
        <img src="images/codestates.png" alt="" height="40"></img>
        <img src="images/Metamask-logo.png" alt="" height="40"></img>
        <img src="images/GitHub_Logo.png" alt="" height="50"></img>
        {/* <div>Kaikas</div> */}
      </div>
      <h2>Contact</h2>
      <div className="contact">
        <a
          href="https://github.com/codestates/beb-03-GroundY"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="images/GitHub-Mark-64px.png"
            alt=""
            height="40"
            width="40"
          ></img>
        </a>
        <a
          href="https://codestates.notion.site/1-7ce6f34197a14d99b71f49c7071d1ef8"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/notion-logo.png" alt="" height="40" width="40"></img>
        </a>
      </div>
    </div>
  );
};

export default Home;
