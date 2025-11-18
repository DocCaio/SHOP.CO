import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FinishBtn: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const finishOrder = () => {
    setOpen(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <button
        onClick={finishOrder}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Finish Order
      </button>

     
      {open && (
        <dialog
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "300px"
            }}
          >
            <h2>✅ Order Completed Successfully!</h2>
            <p>You will be redirected to the Home page...</p>
          </div>
        </dialog>
      )}
    </>
  );
};

export default FinishBtn;
