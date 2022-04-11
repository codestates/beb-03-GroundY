import React from "react";

const Home = () => {
  return (
    <div>
      <div>Ground Y NFT Marketplace</div>
      <div className="About">
        <h1>Why Ground Y?</h1>
        {/* <div>
          Mint your NFT
          <img src="이미지업로드" alt="">
            Upload your image
          </img>
          <img src="제목과 설명작성" alt="">
            add a title and description
          </img>
          <img src="프로퍼티 설정" alt="">
            customize your NFTs with properties
          </img>
        </div> */}
        <div>Check your NFT</div>
        <div>Send your NFT</div>
      </div>
      <div className="team">
        <h1>Who Made?</h1>
        <div className="teammembers">
          Kwon
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
        </div>
        <div className="teammembers">
          Baek
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
          Yang
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
