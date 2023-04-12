import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import GCorrection from '../images/grammercorrection.png'
import Keywords from "../images/keywords.png";
import QuestionsAnswers from "../images/questionanswer.jpg";

const Menu = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div class="card mx-2 my-5" style={{width: "18rem",height:"300px"}}>
            <Link to="/grammercorrection"><img class="card-img-top" src={GCorrection} alt="Grammer Correction" /></Link>
            <div class="card-body">
              <h4 class="card-title" style={{textAlign:"start"}}>Grammer Correction</h4>
              <p class="card-text"style={{textAlign:"start"}}>
              Corrects sentences into standard English.
              </p>
            </div>
          </div>

          <div class="card mx-2 my-5" style={{width: "18rem",height:"300px"}}>
            <Link to="keywords"><img class="card-img-top" src={Keywords} alt="Card image cap" /></Link>
            <div class="card-body">
              <h4 class="card-title" style={{textAlign:"start"}}>Key Words</h4>
              <p class="card-text" style={{textAlign:"start"}}>
              Extract keywords from a block of text. At a lower temperature it
              picks keywords from the text
              </p>
            </div>
          </div>

          <div class="card mx-2 my-5" style={{width: "18rem",height:"300px"}}>
            <Link to="/questionsanswers"><img class="card-img-top" src={QuestionsAnswers} alt="Card image cap" /></Link>
            <div class="card-body">
              <h4 class="card-title" style={{textAlign:"start"}}>Question & Answer</h4>
              <p class="card-text" style={{textAlign:"start"}}>
              Answer questions based on existing knowledge.
              </p>
            </div>
          </div>

          <div class="card mx-2 my-5" style={{width: "18rem",height:"300px"}}>
            <Link to="/qgenerate"><img class="card-img-top" src={QuestionsAnswers} alt="Card image cap" /></Link>
            <div class="card-body">
              <h4 class="card-title" style={{textAlign:"start"}}>Question Generate</h4>
              <p class="card-text" style={{textAlign:"start"}}>
              Give me Question I will generate relevent question
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
