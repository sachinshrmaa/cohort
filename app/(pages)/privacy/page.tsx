import React from "react";

export const metadata = {
  title: "Privacy Policy — The Basics Class by Sachin",
  description: "the basics class by sachin sharma",
};

export default function Privacy() {
  return (
    <div className="bg-brand-secondary py-10 min-h-[70vh]">
      <div className="container md:w-[50%] mx-auto">
        <h1 className="text-4xl mb-6 font-poppins font-normal text-center md:font-medium">
          Privacy Policy
        </h1>
        <p className="mb-4">
          At <b>the basics</b>, we are committed to protecting the privacy of
          our users. This Privacy Policy explains how we collect, use, and share
          information about you when you use our website and online courses.
        </p>

        <p className="mb-4">
          <b>Information We Collect:</b> We collect information about you when
          you register for one of our courses, complete a form on our website,
          or interact with us through other channels such as email. This
          information may include your name, email address, phone number, and
          other contact details.
        </p>

        <p className="mb-4">
          <b>How We Use Your Information:</b> We use the information we collect
          about you to provide you with the services you request, communicate
          with you about your account and our courses and improve the overall
          user experience on our website.
        </p>

        <p className="mb-4">
          <b>Sharing Your Information:</b> We will not share your personal
          information with any third parties without your consent unless
          required to do so by law.
        </p>

        <p className="mb-4">
          <b>Cookies:</b> We use cookies to track your use of our website and to
          personalize your experience. You can choose to disable cookies in your
          browser settings, but this may affect the functionality of our
          website.
        </p>

        <p className="mb-4">
          <b>Data Security:</b> We take reasonable measures to protect the
          security of your personal information. However, no internet
          transmission is completely secure, so we cannot guarantee the security
          of your information.
        </p>

        <p className="mb-4">
          <b>Changes to This Privacy Policy:</b> We may update this Privacy
          Policy from time to time. Any changes will be posted on this page, and
          we encourage you to review our Privacy Policy regularly.
        </p>

        <p className="mb-4">
          By using our website and enrolling in our online courses, you
          acknowledge that you have read and understand this Privacy Policy and
          agree to the collection, use, and sharing of your personal information
          as described. If you have any questions or concerns about our Privacy
          Policy, please contact us.
        </p>
      </div>
    </div>
  );
}
