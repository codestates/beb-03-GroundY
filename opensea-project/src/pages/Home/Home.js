import React from "react";

const Home = () => {
  return (
    <div>
      <div>Ground Y NFT Marketplace</div>
      <div className="About">
        <h1>Why Ground Y?</h1>
        <div>
          Mint your NFT
          <img src="images/description1.png" alt="" height="300"></img>
          Upload your image
          <img src="images/description2.png" alt="" height="300"></img>
          add a title and description
          <img src="images/description3.png" alt="" height="300"></img>
          customize your NFTs with properties
        </div>
        <div>Check your NFT</div>
        <div>Send your NFT</div>
      </div>
      <div className="team">
        <h1>Who Made?</h1>
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
          ></a>
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
        </div>
      </div>
      <div className="partner">
        <h1>Partners</h1>
        <div>Codestates</div>
        <div>MetaMask</div>
        {/* <div>Kaikas</div> */}
      </div>
      <div className="contact">
        <h2>Contact</h2>
        GitHub
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
        Notion
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
