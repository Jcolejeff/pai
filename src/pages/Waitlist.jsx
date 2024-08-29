import MailchimpSubscribe from "react-mailchimp-subscribe";
import Form from "../components/Form";
import { useLayoutEffect } from "react";

export default function Waitlist() {
  const url = import.meta.env.VITE_MAILCHIMP_URL;
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <Form
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}
