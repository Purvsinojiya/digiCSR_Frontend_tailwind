import React from "react";
import background from "./image_company-componant/bg.png";
import logo from "./image_company-componant/image 7.png";
import person from "./image_company-componant/Profile.png";
import download from "./image_company-componant/download.png";
import ankh from "./image_company-componant/ankh.png";

function Rfp_Request() {
  return (
    <div className="rfp-request-container">
      {/* Render card design for width < 640px */}
      <div className="sm:hidden">
        <div className="rfp-card-design">
          <div className="card-content">djdjdjj</div>
        </div>
      </div>

      {/* Render table design for width >= 640px */}
      <div className="hidden sm:block">
        <div className="rfp-table-design">
          <div className="table-content">gmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</div>
        </div>
      </div>
    </div>
  );
}

export default Rfp_Request;
