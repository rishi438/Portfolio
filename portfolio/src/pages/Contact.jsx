// @ts-nocheck
import { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GECKO_TRAITS } from "../utils/constant";
import emailjs from "@emailjs/browser";
import Gecko from "../models/gecko";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const form_ref = useRef(null);
  const [form, set_form] = useState({ name: "", email: "", message: "" });
  const [is_loading, set_is_loading] = useState(false);
  const [current_anime, set_current_anime] = useState("FG_Idle_A");
  const { alert, show_alert, hide_alert } = useAlert();
  let width;

  if (innerWidth < 576) {
    width = "576";
  } else if (innerWidth < 768 && innerWidth > 576) {
    width = "768";
  } else {
    width = "M768";
  }
  const handle_change = (e) => {
    set_form({ ...form, [e.target.name]: e.target.value });
  };
  const handle_focus = (e) => {
    set_current_anime("FG_Idle_Qualification03_A");
  };
  const handle_blur = (e) => {
    set_current_anime("FG_Idle_A");
  };
  const handle_email_focus = (e) => {
    set_current_anime("FG_Idle_Qualification04_A");
  };
  const handle_ta_focus = (e) => {
    set_current_anime("FG_Walk_Right_A");
  };
  const handle_submit = (e) => {
    e.preventDefault();
    set_is_loading(true);
    set_current_anime("FG_Emote_PirateDance_A");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: import.meta.env.VITE_APP_EMAILJS_TO_NAME,
          to_email: import.meta.env.VITE_APP_EMAILJS_TO_SENDER,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        set_is_loading(false);
        show_alert({
          show: true,
          text: "Message sent successfully",
          type: "success",
        });
        setTimeout(() => {
          set_current_anime("FG_Idle_A");
          set_form({ name: "", email: "", message: "" });
        }, 2000);
      })
      .catch((e) => {
        set_is_loading(false);
        show_alert({
          show: true,
          text: "Seems there is some issue. Try after sometime",
          type: "danger",
        });
        set_current_anime("FG_Idle_Qualification05_A");
        // TODO: Show error message
      });
  };
  return (
    <section className="contact relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          ref={form_ref}
          onSubmit={handle_submit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-orange-500">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Ram"
              required
              value={form.name}
              onChange={handle_change}
              onFocus={handle_focus}
              onBlur={handle_blur}
            />
          </label>
          <label className="text-orange-500">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="ram@example.com"
              required
              value={form.email}
              onChange={handle_change}
              onFocus={handle_email_focus}
              onBlur={handle_blur}
            />
          </label>
          <label className="text-orange-500">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how can I help you"
              required
              value={form.message}
              onChange={handle_change}
              onFocus={handle_ta_focus}
              onBlur={handle_blur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={is_loading}
            onFocus={handle_focus}
            onBlur={handle_blur}
          >
            {is_loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full p-4 lg:h-auto md:h-[550px] h-[350px]">
        <Canvas className="bg-transparent h-full w-screen" camera={(0.1, 5)}>
          <Suspense fallback={<Loader />}>
            <directionalLight position={[0.5, 0.8, 1.1]} intensity={6.5} />
            <Gecko
              position={GECKO_TRAITS[width]["POSITION"]}
              scale={GECKO_TRAITS[width]["SCALE"]}
              rotation={GECKO_TRAITS[width]["ROTATION"]}
              current_anime={current_anime}
              set_current_anime={set_current_anime}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
