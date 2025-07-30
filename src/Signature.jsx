/* eslint-disable react/prop-types */

import { useRef } from "react"




const Signature = ({ data }) => {
    const signatureRef = useRef(null);
  
    const copySignature = () => {
      if (signatureRef.current) {
        const signatureHTML = signatureRef.current.outerHTML;
        const blob = new Blob([signatureHTML], { type: "text/html" });
  
        navigator.clipboard
          .write([
            new ClipboardItem({
              "text/html": blob,
            }),
          ])
          .then(() => {
            alert("Signature copied to clipboard!");
          })
          .catch((err) => {
            console.error("Failed to copy signature: ", err);
          });
      }
    };
  
    return (
      <div>
        <div ref={signatureRef}>
          <table
            cellPadding="0"
            cellSpacing="0"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            <tbody>
              {/* Main Content */}
              <tr>
                {/* Logo */}
                <td style={{ paddingRight: "16px", borderRight: "2px solid black" }}>
                  <img
                    src="https://pb-signature-bucket.s3.us-east-1.amazonaws.com/PB-Sign.png"
                    alt="PriceBenowitz logo"
                    style={{ width: "250px", display: "block" }}
                  />
                </td>
  
                {/* Content */}
                <td style={{ paddingLeft: "16px" }}>
                  <h2 style={{ margin: "0", fontSize: "18px" }}>{data.name}</h2>
                  <h3 style={{ margin: "0", fontSize: "16px", color: "#666" }}>
                    {data.jobTitle}
                  </h3>
                  <p style={{ margin: "5px 0" }}>{data.officeAddress}</p>
  
                  <p style={{ margin: "5px 0" }}>
                    <strong>Office:</strong> {data.officeNumbers} |{" "}
                    <strong>Extension:</strong> {data.extension} |{" "}
                    <strong>Fax:</strong> {data.fax}
                    {data.directLine && (
                      <>
                        {" | "}
                        <strong>Direct Line:</strong> {data.directLine}
                      </>
                    )}
                  </p>
  
                  <p style={{ margin: "5px 0" }}>
                    <a href={`mailto:${data.emailAddress}`}>Email</a> |{" "}
                    <a href={data.map}>Map</a> |{" "}
                    <a href="https://pricebenowitz.com">PriceBenowitz.com</a>
                  </p>
                </td>
              </tr>
  
              {/* Footer */}
              <tr>
                <td colSpan="2" style={{ paddingTop: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Text */}
                    <p
                      style={{
                        fontSize: "20px", // Reduced from 25px to 20px
                        fontWeight: "500",
                        margin: "0",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}
                    >
                      <strong>
                        Proud Partner of the{" "}
                        <span style={{ color: "#5a1414" }}>Washington Commanders</span>
                      </strong>
                      <img
                        src="https://pb-signature-bucket.s3.us-east-1.amazonaws.com/commanders-logo.png"
                        alt="Commanders Logo"
                        style={{
                          width: "60px",
                          height: "auto",
                          marginLeft: "8px"
                        }}
                      />
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/* Copy Button */}
        <div>
          <button onClick={copySignature}>Copy Signature</button>
        </div>
      </div>
    );
  };
  
  export default Signature;
