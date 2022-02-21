import React, { memo, useState } from "react";
import { LetterWrapper } from "./style";
import classNames from "classnames";
import { Carousel } from "antd";
import d1 from "@/assets/img/d1.jpg";
import d2 from "@/assets/img/d14.jpg";
import d3 from "@/assets/img/d2.jpg";
import d4 from "@/assets/img/d11.jpg";
import d5 from "@/assets/img/d5.jpg";
import d6 from "@/assets/img/d3.jpg";
const Letter = memo(() => {
  // $(document).ready(function () {
  // var envelope = $("#envelope");
  // var btn_open = $("#open");
  // var btn_reset = $("#reset");

  const [isOpen, setOpen] = useState(false);

  // envelope.click(function () {
  //   open();
  // });
  // btn_open.click(function () {
  //   open();
  // });
  // btn_reset.click(function () {
  //   close();
  // });

  function open() {
    setOpen(!isOpen);
    // envelope.addClass("open").removeClass("close");
  }
  const contentStyle = {
    height: "100%",
    color: "#fff",
    // lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const classes = classNames("envelope", { open: isOpen, close: !isOpen });
  const bgs = [
    { id: 1, url: d1 },
    { id: 2, url: d2 },
    { id: 6, url: d3 },
    { id: 4, url: d4 },
    { id: 5, url: d5 },
    { id: 3, url: d6 },
  ];

  return (
    <LetterWrapper>
      <Carousel effect="fade" autoplay>
        {/* <div className="carousel">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div> */}
        {bgs.map((bg) => (
          <div className="disini-bg">
            <img src={bg.url} className="disini-img" />
          </div>
        ))}
      </Carousel>
      <div class="envlope-wrapper">
        <div className={classes}>
          <div class="front flap" onClick={open}></div>
          <div class="front pocket" onClick={open}></div>
          <div class="letter">
            {/* <div class="words line1">亲爱的宝宝：</div>
            <div class="words line2">22</div>
            <div class="words line3">33</div>
            <div class="words line4">44</div> */}

            <div className="letter-bg">
              <h1>我们家可爱的宝宝:</h1>
              <div className="text">
                不知不觉就和宝宝一起过520啦~时间过得可真快。和宝宝在一起总是那么得开心~~希望和宝宝能过无数个520~~~啦啦啦~~么么哒
              </div>
            </div>
          </div>
          <div class="hearts">
            <div class="heart a1"></div>
            <div class="heart a2"></div>
            <div class="heart a3"></div>
          </div>
        </div>
      </div>
      {/* <div class="reset">
        <button
          id="open"
          onClick={() => {
            open();
          }}
        >
          打开
        </button>
        <button id="reset" onClick={close}>
          重置
        </button>
      </div> */}
    </LetterWrapper>
  );
});

export default Letter;
