import React from "react";
import "./Home.css";
import styled from "styled-components";

const handleTop = () => {
  // 클릭하면 스크롤이 위로 올라가는 함수
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Container = styled.div`
  background-color: rgb(255, 92, 77);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fcb27b'/%3E%3Cstop offset='1' stop-color='%23fcb27b' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffad2d'/%3E%3Cstop offset='1' stop-color='%23ffad2d' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fff594'/%3E%3Cstop offset='1' stop-color='%23fff594' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FF5C4D'/%3E%3Cstop offset='1' stop-color='%23FF5C4D' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFF1D7'/%3E%3Cstop offset='1' stop-color='%23FFF1D7' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FCFF46'/%3E%3Cstop offset='1' stop-color='%23FCFF46' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;

const TopBtn = styled.button`
  position: fixed;
  opacity: 0.6;
  bottom: 40px;
  right: 40px;
  z-index: 10;
  border-radius: 20%;
  border: 0 none;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  padding-top: 60px;
  text-shadow: 3px 3px 4px rgb(162, 162, 162);
`;

const Home = () => {
  return (
    <div>
      <Container>
        <TopBtn onClick={handleTop}>
          <img src="images/top-button.png" alt="" height="50"></img>
        </TopBtn>

        <Title>Ground Y NFT Platform</Title>
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
            <a
              href="https://github.com/wh7787"
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
        </div>
        <h1>Partners</h1>
        <div className="partner">
          <img src="images/codestates.png" alt="" height="40"></img>
          <img src="images/Metamask-logo.png" alt="" height="40"></img>
          <img src="images/GitHub_Logo.png" alt="" height="50"></img>
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
            <img
              src="images/notion-logo.png"
              alt=""
              height="40"
              width="40"
            ></img>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Home;
