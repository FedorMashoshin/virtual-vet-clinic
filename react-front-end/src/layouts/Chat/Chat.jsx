import React, { useEffect, useState } from "react";
// import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.scss";

import MessageInput from "./MessageInput";
import Messages from "./Messages";
import InfoBar from "./InfoBar";
// import TextContainer from "./TextContainer";

const ENDPOINT = "http://localhost:8080";

let socket;

// DUMMY MESSAGES
const messagess = ["Hello world", "Nice to meet you"];
const location = `/chat?name=AAA&room=myRoom`;
let name = "TTT";
let room = "myRoom";

// const users = {};

const Chat = () => {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");
  const [bottom, setBottom] = useState("");

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);

  useEffect(() => {
    // const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    // setRoom(room);
    // setName(name)

    name = localStorage.getItem("userName");
    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);
  // }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages(messages => [...messages, message]);
    });

    // socket.on("roomData", ({ users }) => {
    //   setUsers(users);
    // });
  }, []);

  // SEND MESSAGE
  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const [isHidden, setIsHidden] = useState("hidden");

  let handleClick = () => {
    if (isHidden === "hidden") {
      setIsHidden("show");
    } else {
      setIsHidden("hidden");
    }

    if (window.location.href.endsWith("appointment")) {
      if (bottom === "none") {
        setBottom("chat-bottom");
      } else {
        setBottom("none");
      }
    }
  };

  return (
    <>
      <button className="chat-button" onClick={handleClick}>
        <svg
          className="chat-button-logo"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512.001 512.001"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <g>
                <path
                  d="M468.53,306.575c-4.14-10.239-15.798-15.188-26.038-11.046c-10.241,4.14-15.187,15.797-11.047,26.038L455,379.833
				l-69.958-30.839c-5.064-2.232-10.827-2.267-15.917-0.095c-23.908,10.201-49.52,15.373-76.124,15.373
				c-107.073,0-179-83.835-179-162.136c0-89.402,80.299-162.136,179-162.136s179,72.734,179,162.136
				c0,6.975-0.65,15.327-1.781,22.913c-1.63,10.925,5.905,21.102,16.83,22.732c10.926,1.634,21.103-5.905,22.732-16.83
				c1.431-9.59,2.219-19.824,2.219-28.815c0-54.33-23.006-105.308-64.783-143.543C405.936,20.809,351.167,0,293.001,0
				S180.067,20.809,138.784,58.592c-37.332,34.168-59.66,78.516-63.991,126.335C27.836,216.023,0.001,265.852,0.001,319.525
				c0,33.528,10.563,65.34,30.67,92.717L1.459,484.504c-3.051,7.546-1.224,16.189,4.621,21.855
				c3.809,3.694,8.828,5.642,13.925,5.642c2.723-0.001,5.469-0.556,8.063-1.7l84.229-37.13c21.188,7.887,43.585,11.88,66.703,11.88
				c0.5,0,0.991-0.039,1.482-0.075c33.437-0.253,65.944-9.048,94.098-25.507c25.218-14.744,45.962-34.998,60.505-58.917
				c14.199-2.55,28.077-6.402,41.547-11.551l107.301,47.3c2.595,1.143,5.34,1.7,8.063,1.7c5.097-0.001,10.117-1.949,13.926-5.642
				c5.845-5.666,7.672-14.308,4.621-21.855L468.53,306.575z M179.002,445c-0.273,0-0.539,0.03-0.81,0.041
				c-20.422-0.104-40.078-4.118-58.435-11.95c-5.089-2.173-10.852-2.138-15.916,0.095l-46.837,20.646l15.109-37.375
				c2.793-6.909,1.512-14.799-3.322-20.47c-18.835-22.097-28.79-48.536-28.79-76.462c0-31.961,13.445-62.244,36.969-85.206
				c7.324,39.925,27.989,78.117,59.162,108.119c38.791,37.333,90.101,58.961,145.506,61.565
				C255.626,429.608,218.402,445,179.002,445z"
                />
                <circle cx="292.001" cy="203" r="20" />
                <circle cx="372.001" cy="203" r="20" />
                <circle cx="212.001" cy="203" r="20" />
              </g>
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </button>
      <div className={`chat-container ` + isHidden + " " + bottom + " "}>
        <InfoBar room={room} />
        <h1 className="chat-header"> Welcome to chat! {response}</h1>
        <Messages messages={messages} name={"TIMA"} />
        <MessageInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        {/* <TextContainer users={users} /> */}
      </div>
    </>
  );
};

export default Chat;
