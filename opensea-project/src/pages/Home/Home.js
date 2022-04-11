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
          <ul>Minting Page</ul>
          {/* <img src="깃허브 로고 이미지" alt=""></img> */}
        </div>
        <div className="teammembers">
          Baek
          <div>Team Member</div>
        </div>
        <div className="teammembers">
          Yang
          <div>Team Member</div>
        </div>
      </div>
      <div className="partner">
        <h1>Partners</h1>
        <div>codestates</div>
        <div>metamask</div>
      </div>
      <div className="contact">
        <h2>Contact</h2>
      </div>
    </div>
  );
};

export default Home;
