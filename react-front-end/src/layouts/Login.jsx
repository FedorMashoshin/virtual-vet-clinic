import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useAppData } from "../hooks/useAppData";

import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Checkbox,
} from "semantic-ui-react";
import "../layouts/Login.scss";
import InputField from "../components/Input";

function LoginModal() {
  const { getMyCredentials } = useAppData;

  const [open, setOpen] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [type, setType] = React.useState("");

  const validateCredentials = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = () => {
    const user = {
      email: email,
      password: password,
      type: type,
    };
    console.log("HAHA", user);

    Promise.all([axios.post("/users/login", user), axios.get("/users/me")])
      .then(res => {
        console.log("SEND login to BE", res[0].data.user);
        console.log("GET from BE user", res[1].data);
      })
      // axios
      //   .post("/users/login", user)
      //   .then((response) => {
      //     console.log("SUCCESS", response.data.user);
      //   })
      .catch(error => {
        console.log("registration error", error);
      });
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button className="login_button">Login</button>}
    >
      <h2 className="login_header">Choose Account Type</h2>
      <div className="acount_images" onChange={e => setType(e.target.value)}>
        <label>
          <div className="imgDiv">Clinic</div>
          <input
            type="radio"
            name="test"
            value="clinic"
            checked={type === "clinic"}
          />
          <svg
            className="account_type"
            id="Capa_1"
            enable-background="new 0 0 512 512"
            height="512"
            viewBox="0 0 512 512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m436 170h-360c-8.284 0-15-6.716-15-15v-100c0-8.284 6.716-15 15-15h360c8.284 0 15 6.716 15 15v100c0 8.284-6.716 15-15 15z"
              fill="#50ccf0"
            />
            <path
              d="m436 40h-180v130h180c8.284 0 15-6.716 15-15v-100c0-8.284-6.716-15-15-15z"
              fill="#32afd7"
            />
            <path
              d="m486 512h-460c-8.284 0-15-6.716-15-15v-342c0-8.284 6.716-15 15-15h460c8.284 0 15 6.716 15 15v342c0 8.284-6.716 15-15 15z"
              fill="#82e0ff"
            />
            <path
              d="m486 140h-230v372h230c8.284 0 15-6.716 15-15v-342c0-8.284-6.716-15-15-15z"
              fill="#50ccf0"
            />
            <path
              d="m321 512h-130v-137c0-8.284 6.716-15 15-15h100c8.284 0 15 6.716 15 15z"
              fill="#ffe646"
            />
            <path
              d="m306 360h-50v152h65v-137c0-8.284-6.716-15-15-15z"
              fill="#fad21e"
            />
            <path
              d="m336 190h-160c-8.284 0-15-6.716-15-15v-160c0-8.284 6.716-15 15-15h160c8.284 0 15 6.716 15 15v160c0 8.284-6.716 15-15 15z"
              fill="#e8f2f8"
            />
            <path
              d="m336 0h-80v190h80c8.284 0 15-6.716 15-15v-160c0-8.284-6.716-15-15-15z"
              fill="#d2e1e6"
            />
            <path
              d="m286 80h-15v-15c0-8.284-6.716-15-15-15s-15 6.716-15 15v15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15h15v15c0 8.284 6.716 15 15 15s15-6.716 15-15v-15h15c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
              fill="#fa7878"
            />
            <path
              d="m501 280h-65c-8.284 0-15-6.716-15-15v-50c0-8.284 6.716-15 15-15h65z"
              fill="#32afd7"
            />
            <path
              d="m501 440h-65c-8.284 0-15-6.716-15-15v-50c0-8.284 6.716-15 15-15h65z"
              fill="#32afd7"
            />
            <path
              d="m76 280h-65v-80h65c8.284 0 15 6.716 15 15v50c0 8.284-6.716 15-15 15z"
              fill="#50ccf0"
            />
            <path
              d="m76 440h-65v-80h65c8.284 0 15 6.716 15 15v50c0 8.284-6.716 15-15 15z"
              fill="#50ccf0"
            />
            <path
              d="m332.213 286 19.394-19.394c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-25.607 25.607h-97.574l-25.606-25.606c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l19.393 19.393-19.394 19.394c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.606-4.394l25.607-25.606h97.574l25.606 25.606c2.929 2.93 6.768 4.394 10.607 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213z"
              fill="#e8f2f8"
            />
            <path
              d="m271 125v-15h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15v-15c0-8.284-6.716-15-15-15v90c8.284 0 15-6.716 15-15z"
              fill="#f44650"
            />
            <path
              d="m351.606 245.394c-5.857-5.858-15.355-5.858-21.213 0l-25.606 25.606h-48.787v30h48.787l25.606 25.606c2.929 2.93 6.768 4.394 10.607 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-19.393-19.393 19.394-19.394c5.858-5.857 5.858-15.355-.001-21.212z"
              fill="#d2e1e6"
            />
          </svg>
        </label>

        <label>
          <div className="imgDiv">Pet owner</div>
          <input
            type="radio"
            name="test"
            value="pet"
            checked={type === "pet"}
          />
          <svg
            className="account_type"
            height="512"
            viewBox="0 0 512 512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="flat">
              <path
                d="m336 216-24 32-40 16-24 16-16-16v-16l24-8 40-24 24-48 16.468 39.404z"
                fill="#fdc9a6"
              />
              <path
                d="m360 320 24 72 48 64 24-40-32-40-24-96z"
                fill="#a8a8a8"
              />
              <path d="m280 456-16 16v16h64v-32z" fill="#683b0d" />
              <path
                d="m400 267.155v-11.155h-64l-56 96v104h48v-96l32-32 25.26-25.26a50.324 50.324 0 0 0 14.74-35.585z"
                fill="#cbcbcb"
              />
              <path
                d="m224 416v32l-16 40h32l16-40v-26l-24-30z"
                fill="#c38325"
              />
              <path
                d="m112 408-27.095 20.321a8 8 0 0 0 -2.628 9.372l13.723 34.307 24-8-8-24 16-16z"
                fill="#c38325"
              />
              <path
                d="m400 256v-98.559a18 18 0 0 0 -3.014-9.971l-20.986-31.54h-40l8 16-23.768 32.733a27.249 27.249 0 0 0 -3.8 24.629 27.25 27.25 0 0 0 13.668 15.756l5.9 2.952v48z"
                fill="#ff6268"
              />
              <path
                d="m365.933 175.822 18.067 48.178-2.683 38.78-9.317 17.22 16.425 14.606 19.575-3.606 8-75-18.247-51.752a16.931 16.931 0 0 0 -21.942-10.212 16.932 16.932 0 0 0 -9.878 21.786z"
                fill="#fdc9a6"
              />
              <path d="m432 456v24h32l16-40-24-24z" fill="#683b0d" />
              <path
                d="m328 59.93v32a8 8 0 0 0 8 8h8v16h32v-16l8-24h-16l-8-16z"
                fill="#fdc9a6"
              />
              <path
                d="m328 59.93-3.13-9.389a20.165 20.165 0 0 1 7.945-23.154 20.162 20.162 0 0 1 22.37 0l12.815 8.543h14.774a14.928 14.928 0 0 1 13.352 8.252 14.928 14.928 0 0 1 -.931 14.956l-11.195 16.792h-16l-8-16z"
                fill="#683b0d"
              />
              <path
                d="m264 344a36.612 36.612 0 0 0 8.845-37.466l-.845-2.534 12.172 3.043a32.3 32.3 0 0 1 23.836 25 32.3 32.3 0 0 1 -12.291 32.171l-15.717 11.786z"
                fill="#c38325"
              />
              <path
                d="m64 320-16 8-8 16-16 8 16 32 32-8 24 8 4.032 16.127a32 32 0 0 0 19.16 21.95l24.808 9.923v16l-16 40h32l16-32v-24l48-16 8-24 32 40 27 16 14.372 40h22.628l-8-56-24-24v-16.4a49.1 49.1 0 0 0 -18.427-38.34 78.763 78.763 0 0 0 -49.2-17.26h-14.773a78.758 78.758 0 0 0 -11.138.792l-32.231 4.6a78.007 78.007 0 0 1 -35.7-3.219l-30.531-10.173-24-32z"
                fill="#ea9d2d"
              />
              <path
                d="m245.66 277.66c-.49.49-112.05 64.35-112.05 64.35l-30.95 46.43a8 8 0 1 1 -13.32-8.88l32-48a8.08 8.08 0 0 1 2.69-2.51l110.1-62.92z"
                fill="#0292c9"
              />
              <circle cx="72" cy="343" fill="#c38325" r="7" />
            </g>
          </svg>
        </label>
      </div>

      <Modal.Content image>
        <Modal.Description>
          <p className="login_header_small">
            Please fill out the form to get started
          </p>
          <div className="two field">
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={e => setEmail(e.target.value)}
              value={email}
              name="email"
            />
          </div>
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </Modal.Description>
      </Modal.Content>
      <p className="noAccount">
        Don't have an account?
        <a className="linkSignup" href="/register">
          Signup
        </a>
      </p>

      <Modal.Actions>
        {/* <svg
          className="bottom_img"
          id="Capa_1"
          enable-background="new 0 0 512 512"
          height="512"
          viewBox="0 0 512 512"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="m418.39 323.634c-21.469-18.063-40.599-38.268-56.861-60.052-12-16.074-27.75-29.396-45.549-38.526-18.415-9.445-39.155-14.438-59.979-14.438s-41.565 4.993-59.979 14.438c-17.798 9.13-33.549 22.452-45.549 38.526-16.262 21.784-35.393 41.988-56.861 60.052-23.587 19.846-36.662 48.909-35.874 79.739 1.335 52.242 43.216 95.28 95.345 97.979 1.784.093 3.561.139 5.336.139 18.878-.001 37.16-5.206 53.168-15.186 12.796-7.977 27.933-12.188 43.835-12.188h.254.693c15.917-.077 31.184 4.169 44.046 12.188 17.514 10.919 37.736 16.122 58.505 15.048 52.127-2.698 94.007-45.736 95.344-97.979.788-30.83-12.287-59.893-35.874-79.74z" />
            <path d="m222.419 85.916-24.11-57.901c-4.399-10.564-14.637-17.436-26.081-17.504-.058 0-.115-.001-.173-.001-11.374 0-21.613 6.733-26.115 17.19l-24.241 56.296c-4.245 8.326-6.486 17.644-6.486 26.989 0 14.688 5.686 28.741 16.009 39.573 10.482 10.999 24.371 17.219 39.107 17.515.389.008.776.012 1.165.012 14.814 0 28.752-5.685 39.357-16.079 10.891-10.675 16.889-24.953 16.889-40.205v-1.314c0-8.54-1.79-16.805-5.321-24.571z" />
            <path d="m391.468 85.917-24.111-57.902c-4.399-10.564-14.637-17.436-26.081-17.504-.058 0-.115-.001-.173-.001-11.374 0-21.613 6.733-26.115 17.19l-24.241 56.296c-4.245 8.326-6.486 17.644-6.486 26.989 0 14.688 5.686 28.741 16.009 39.573 10.482 10.999 24.371 17.219 39.107 17.515.389.008.776.012 1.165.012 14.814 0 28.752-5.685 39.357-16.079 10.891-10.675 16.889-24.953 16.889-40.205v-1.314c0-8.538-1.789-16.803-5.32-24.57z" />
            <path d="m107.207 205.513-24.11-57.899c-4.398-10.564-14.635-17.436-26.079-17.505-11.453-.074-21.764 6.678-26.291 17.189l-24.24 56.296c-4.246 8.326-6.487 17.644-6.487 26.989 0 14.688 5.686 28.741 16.009 39.573 10.483 11 24.372 17.22 39.107 17.515.389.008.776.012 1.165.012 14.814 0 28.752-5.685 39.358-16.079 10.891-10.676 16.889-24.954 16.889-40.205v-1.313c0-8.54-1.791-16.805-5.321-24.573z" />
            <path d="m506.679 205.513-24.11-57.899c-4.399-10.565-14.636-17.437-26.08-17.505-.059-.001-.115-.001-.174-.001-11.374 0-21.613 6.733-26.116 17.19l-24.241 56.296c-4.245 8.325-6.486 17.643-6.486 26.988 0 14.688 5.686 28.741 16.009 39.573 10.482 11 24.371 17.22 39.107 17.515.389.008.776.012 1.165.012 14.814 0 28.751-5.685 39.357-16.079 10.892-10.675 16.89-24.953 16.89-40.205v-1.313c0-8.54-1.79-16.805-5.321-24.572z" />
          </g>
        </svg> */}
        <Button color="red" onClick={() => setOpen(false)}>
          CANCEL
        </Button>
        <Button
          content="LOGIN"
          labelPosition="right"
          icon="checkmark"
          onClick={handleSubmit}
          positive
          disabled={!validateCredentials()}
        />
      </Modal.Actions>
    </Modal>
  );
}

export default LoginModal;
