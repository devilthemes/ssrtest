import { useEffect, useState } from "react";

interface ToastInterface {
  title?: string;
  desc?: string;
  variant?: string;
  status?: false;
  onClose?: () => void;
  onError?: ()=>void;
}
export default function Toaster({
  title = "",
  desc = "",
  variant = "success",
  onClose = () => {},
  onError = ()=>{}
}: ToastInterface) {
  const warningIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2908 3.85999L1.82075 18C1.64612 18.3024 1.55372 18.6453 1.55274 18.9945C1.55176 19.3437 1.64224 19.6871 1.81518 19.9905C1.98812 20.2939 2.23748 20.5467 2.53846 20.7238C2.83944 20.9009 3.18155 20.9962 3.53075 21H20.4708C20.82 20.9962 21.1621 20.9009 21.463 20.7238C21.764 20.5467 22.0134 20.2939 22.1863 19.9905C22.3593 19.6871 22.4497 19.3437 22.4488 18.9945C22.4478 18.6453 22.3554 18.3024 22.1808 18L13.7108 3.85999C13.5325 3.5661 13.2815 3.32311 12.9819 3.15447C12.6824 2.98584 12.3445 2.89725 12.0008 2.89725C11.657 2.89725 11.3191 2.98584 11.0196 3.15447C10.72 3.32311 10.469 3.5661 10.2908 3.85999V3.85999Z"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9V13"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17H12.01"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
   
  );
  const successIcon = (
    <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0013 18.3333C14.6038 18.3333 18.3346 14.6025 18.3346 10C18.3346 5.39751 14.6038 1.66667 10.0013 1.66667C5.3988 1.66667 1.66797 5.39751 1.66797 10C1.66797 14.6025 5.3988 18.3333 10.0013 18.3333Z"
      stroke="#027A48"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 10L9.16667 11.6667L12.5 8.33333"
      stroke="#027A48"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
  useEffect(() => {
    setTimeout(() => {
      if(variant === "danger"){
        onError();
      }else{
        onClose();
      }
     
    }, 3000);
  }, []);

  return (
    <div className={`toaster ${variant}`}>
      <div className="inner">
        <div className="left">
          <div className="ball">
           {variant === "success" ? successIcon : warningIcon}
          </div>
        </div>
        <div className="right">
          {
            title && title.length>0 && <div className="title">{title}</div>
          }
          
          <div className="desc">{desc}</div>
        </div>
      </div>
    </div>
  );
}
