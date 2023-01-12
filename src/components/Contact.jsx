import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const boxRef = useRef();

  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --

    let ctx = gsap.context(() => {
      // all our animations can use selector text like ".box"
      // and it's properly scoped to our component

      gsap.to(".text-anim", {
        y: 0,
        delay: 0.2,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".contact .text",
        },
      });
      gsap.to(".title-anim", {
        y: 0,
        delay: 0.2,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".contact h2",
        },
      });
      gsap.from(".contact_inputs p", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact_inputs",
          start: "+200px bottom",
        },
      });
      gsap.to(".contact-form button", {
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".contact-form button",
        },
      });
    }, boxRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  //Formik logic

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    //Form Validation

    validationSchema: Yup.object({
      name: Yup.string()
        .max(
          20,
          `${
            i18n.language === "en"
              ? "Name must be 20 characters or less"
              : "Nombre debe de ser 20 caracteres o menos"
          }`
        )
        .required(
          `${
            i18n.language === "en" ? "Name is required" : "Nombre es requerido"
          }`
        ),
      email: Yup.string()
        .email(
          `${
            i18n.language === "en"
              ? "Invalid email address"
              : "Correo electrónico invalido"
          }`
        )
        .required(
          `${
            i18n.language === "en"
              ? "Email is required"
              : "Correo Electrónico es requerido"
          }`
        ),
      subject: Yup.string()
        .max(
          20,
          `${
            i18n.language === "en"
              ? "Subject must be 25 characters or less"
              : "Asunto debe de ser 25 caracteres o menos"
          }`
        )
        .required(
          `${
            i18n.language === "en"
              ? "Subject is required"
              : "Asunto es requerido"
          }`
        ),
      message: Yup.string()
        .min(
          20,
          `${
            i18n.language === "en"
              ? "Message must be 20 characters or more"
              : "Mensaje debe de ser 20 caracteres o más"
          }`
        )
        .required(
          `${
            i18n.language === "en"
              ? "Subject is required"
              : "Asunto es requerido"
          }`
        ),
    }),

    onSubmit: (values, actions) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-demo", ...values }),
      })
        .then(() => {
          alert("Success");
          navigate("./success");
          actions.resetForm();
        })
        .catch(() => {
          alert("Error");
        })
        .finally(() => actions.setSubmitting(false));
    },
  });

  return (
    <div className="contact" ref={boxRef}>
      <span className="s text" style={{ color: "#31809D" }}>
        <span className="text-anim">{t("contact.subTitle")}</span>
      </span>
      <h2 className="xl title">
        <span className="title-anim">{t("contact.title")}</span>
      </h2>

      <form
        name="contact"
        data-netlify={true}
        method="POST"
        onSubmit={formik.handleSubmit}
        value="contact"
        className="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="contact_inputs flex">
          <div>
            <p>
              <label
                htmlFor="name"
                className={`${
                  formik.touched.name && formik.errors.name ? "red_label" : ""
                }`}
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : `${t("contact.name")}`}
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </p>
            <p>
              <label
                htmlFor="email"
                className={`${
                  formik.touched.email && formik.errors.email ? "red_label" : ""
                }`}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : `${t("contact.email")}`}
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </p>
            <p>
              <label
                htmlFor="subject"
                className={`${
                  formik.touched.subject && formik.errors.subject
                    ? "red_label"
                    : ""
                }`}
              >
                {formik.touched.subject && formik.errors.subject
                  ? formik.errors.subject
                  : `${t("contact.subject")}`}
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter your subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
              />
            </p>
          </div>
          <div className="form_message">
            <p>
              <label
                htmlFor="message"
                className={`${
                  formik.touched.message && formik.errors.message
                    ? "red_label"
                    : ""
                }`}
              >
                {formik.touched.message && formik.errors.email
                  ? formik.errors.email
                  : `${t("contact.message")}`}
              </label>
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
            </p>
          </div>
        </div>
        <p>
          <button className="button" type="submit">
            <span className="button_link flex jc-c ai-c xs">
              {t("contact.btn")}
            </span>
          </button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
