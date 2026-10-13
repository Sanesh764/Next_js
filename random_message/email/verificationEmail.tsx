
import React from "react";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function verificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#f4f4f5",
        padding: "30px 15px",
        color: "#18181b",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "32px 24px",
          border: "1px solid #e4e4e7",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#4f46e5",
            fontSize: "28px",
            margin: "0 0 24px",
          }}
        >
          Mystry Message
        </h1>

        <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>
          Verify Your Email
        </h2>

        <p style={{ fontSize: "15px", lineHeight: "24px" }}>
          Hello {username},
        </p>

        <p style={{ fontSize: "15px", lineHeight: "24px", color: "#52525b" }}>
          Thank you for joining Mystry Message! Use the
          verification code below to verify your email address.
        </p>

        <div
          style={{
            backgroundColor: "#eef2ff",
            border: "1px dashed #818cf8",
            borderRadius: "10px",
            padding: "24px 12px",
            textAlign: "center",
            margin: "24px 0",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#71717a",
              letterSpacing: "1px",
              margin: "0 0 12px",
            }}
          >
            YOUR VERIFICATION CODE
          </p>

          <h1
            style={{
              fontSize: "32px",
              letterSpacing: "8px",
              color: "#4338ca",
              margin: 0,
            }}
          >
            {otp}
          </h1>
        </div>

        <p style={{ fontSize: "14px", lineHeight: "22px", color: "#52525b" }}>
          This verification code is valid for 10 minutes.
          Please do not share it with anyone.
        </p>

        <p style={{ fontSize: "14px", lineHeight: "22px", color: "#71717a" }}>
          If you did not create an account, you can safely ignore
          this email.
        </p>

        <hr
          style={{
            border: 0,
            borderTop: "1px solid #e4e4e7",
            margin: "28px 0 18px",
          }}
        />

        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#a1a1aa",
          }}
        >
          © {new Date().getFullYear()} Mystry Message
        </p>
      </div>
    </div>
  );
}
