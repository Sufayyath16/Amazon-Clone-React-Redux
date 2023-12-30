import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Home() {
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/61Pl6UoPlnL._SX1500_.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/71v6E8M5e9L._SX3000_.jpg"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/71h4zig0zCL._SX3000_.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/716juDVXF5L._SX3000_.jpg"
              alt="Fourth slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/716acwUvxML._SX3000_.jpg"
              alt="Fifth slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="d-flex">
          <div>
            <b>Top Picks For Your Home</b>
            <CardGroup style={{ width: "fit-content" }}>
              <div className="d-flex flex-column">
                <Card>
                  <Card.Img
                    className="cardimg"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="cardtitle">ACs</Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="cardimg"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="cardtitle">Refrigerators</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="d-flex flex-column">
                <Card>
                  <Card.Img
                    className="cardimg"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="cardtitle">Microvaves</Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="cardimg"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="cardtitle">
                      Washing Machines
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </CardGroup>
          </div>

          <div>
            <b>Shop And Pay | Earn Rewards Daily</b>
            <CardGroup style={{ width: "fit-content" }}>
              <div className="d-flex flex-column">
                <Card>
                  <Card.Img
                    className="cardimg"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="cardtitle">
                      Claim Your Scratch Cards
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="cardimg"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="cardtitle">
                      Redeem Your Collected Rewards
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="d-flex flex-column">
                <Card>
                  <Card.Img
                    className="cardimg"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_WinMore._SY116_CB627364845_.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="cardtitle">
                      Unlock more rewards when you pay or shop
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    className="cardimg"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay_Rewards/Rewards0.5x._SY116_CB633810016_.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="cardtitle">
                      Explore all offers in one place
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </CardGroup>
          </div>
        </div>
      </div>
    </>
  );
}

