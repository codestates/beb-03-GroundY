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
          <div>Team Leader</div>
          <ul>Project Leading</ul>
          <ul>Minting Page Implement</ul>
          {/* <img src="깃허브 로고 이미지" alt=""></img> */}
        </div>
        <div className="teammembers">
          Baek
          <div>Team Member</div>
          <ul>Tokenlist Page Implement</ul>
          <ul>Page Routing</ul>
        </div>
        <div className="teammembers">
          Yang
          <div>Team Member</div>
          <ul>Home Page Implement</ul>
          <ul>Deploy Smart Contract</ul>
        </div>
      </div>
      <div className="partner">
        <h1>Partners</h1>
        <div>codestates</div>
        <div>metamask</div>
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
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224"
            alt=""
            height="40"
            width="40"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Home;
