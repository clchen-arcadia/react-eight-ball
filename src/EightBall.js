import DEFAULT_ANSWERS from './answers.js';
import React, { useState } from "react";
import { randomSelect } from './helpers';
import './EightBall.css';

/**
 *  EightBall component -- answers your question ooOOooh!
 *
 *  Props:
 *    - answers (an array of object answers, containing message, color)
 *        like:
 *         [
 *            { msg: "It is certain.", color: "green" },
 *            { msg: "It is decidedly so.", color: "green" }, ...
 *         ]
 *
 *  State:
 *    - message: string, message to be displayed
 *    - color: background color for the eight ball
 *
 *  App renders --> EightBall
 */

function EightBall({answers = DEFAULT_ANSWERS}) {
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  function onClick() {
    const randomMessage = randomSelect(answers);
    setMessage(randomMessage.msg);
    setColor(randomMessage.color);
  }

  return (
    <div
      className="EightBall"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      <p className="EightBall-message">{message}</p>
    </div>
  );
}

export default EightBall;
