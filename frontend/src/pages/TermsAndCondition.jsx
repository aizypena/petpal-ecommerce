import Navbar from "../components/Navbar";
import useDocumentTitle from "../shared/useDocumentTitle";
import { Footer } from "../components/Footer";
import footerItems from "../shared/footerItems";

export const TermsAndCondition = () => {
  // dynamic title
  useDocumentTitle("Terms and Condition | PetPal");

  return (
    <>
      <Navbar />
      <div className="terms-condition-main-container container mx-auto px-4 font-mono">
        <section className="terms-condition-section mt-8 mb-8 md:mt-16 md:mb-16 container mx-auto px-4 md:px-16 lg:px-32 xl:px-72">
          <div className="terms-and-condition-title-container flex justify-center mb-8 md:mb-16">
            <p className="text-2xl md:text-4xl">Terms & Condition</p>
          </div>
          <div className="terms-and-condition-content">
            <div className="content-1">
              <p>
                These Terms of Use (“Terms”) shall govern your access and use of
                the Platform and of the services therein. The term “Platform”
                pertains to the website operated by{" "}
                <span className="font-bold">Code Cr4fters</span> (“We” or "Us"
                or “Our”) at{" "}
                <span className="font-bold">www.petpal.com.ph</span>, including
                the mobile versions and mobile applications made available by
                us, if any. By continuing to access or use the Platform and/or
                any of the services therein, you represent that you are at least
                18 years old and you have read, understood and agree, without
                limitation or qualification, to be bound by these Terms and our
                Privacy Policy. If you do not agree to these Terms, please do
                not access and/or use the Platform or any of the services
                therein.
              </p>
            </div>
            <div className="content-2 pt-10">
              <p className="font-bold underline pb-2">General</p>
              <p>
                In using the Platform and the services therein, you agree to:{" "}
              </p>
              <ol className="list-decimal pl-10">
                <li>Do so only for its intended and lawful purposes.</li>
                <li>
                  Ensure that all information or data you provide in the
                  Platform are accurate and agree to take sole responsibility
                  for such information and data.
                </li>
                <li>
                  Be responsible for maintaining the confidentiality of your
                  account information and password and for restricting access to
                  such information and to your computer. You agree to accept
                  responsibility for all activities that occur under your
                  account, whether such activity is authorized or not. You
                  should notify us immediately if you have knowledge that or
                  have reason for suspecting that the confidentiality of your
                  account has been compromised or if there has been any
                  unauthorized use thereof.
                </li>
                <li>
                  Not try or attempt to try to interrupt or harm the Platform,
                  its operations, services, facilities or software in any
                  manner.
                </li>
                <li>
                  Not impersonate any person or entity or falsely state or
                  otherwise misrepresent your affiliation with any person or
                  entity.
                </li>
                <li>
                  Not use or upload any material that contains, or which you
                  have reason to suspect contains, viruses, worms, trojan
                  horses, spyware, adware, damaging components, malicious code
                  or harmful or disruptive components which may impair or
                  corrupt the Platform’s data or damage or interfere with the
                  operation of the Platform.
                </li>
              </ol>
            </div>
            <div className="content-3 pt-10">
              <p className="font-bold underline pb-2">
                Registration and Account Security
              </p>
              <p>
                To access and use the Platform, you are required to register and
                create an account. However, we have the absolute discretion to
                refuse your registration and/or to terminate the same for any
                reason whatsoever at any time with or without notice.
              </p>
              <p>Upon registration:</p>
              <ol className="list-decimal pl-10">
                <li>
                  You must provide us with accurate, complete and up to date
                  registration information.
                </li>
                <li>
                  We are authorized to assume that any person using the Platform
                  with your username and password is either you yourself or is
                  authorized to act in your behalf.
                </li>
              </ol>
              <p>
                You are responsible for safeguarding your username and password
                that you use to access the Platform and for any activities or
                actions under your password. You shall be liable for every order
                made under your login and as such, agree to indemnify us for all
                claims, losses, damages whatsoever arising from the actions of a
                person in connection with the access and use of the Platform
                using your login details.
              </p>
              <p>
                At any time, we may request you to update your username and/or
                password. We shall not be liable or responsible for any losses
                suffered by you arising out of or in connection with or by
                reason of such request or due to any invalidation in username or
                password, regardless of cause.
              </p>
              <p>
                We may, at any time, change the price and other specifications
                of the Products.
              </p>
            </div>
            <div className="content-4 pt-10">
              <p className="font-bold underline pb-2">Placing Order</p>
              <p>
                You may place your order by clicking the “Buy now” or “Add to my
                cart/bag” or other similar button, and proceeding to the check
                out page. By clicking the “Buy now” or “Add to my cart/bag”
                button or “Check out” or similar button, you are effectively
                submitting your offer to buy a particular Product, which we may
                accept or reject. You shall be responsible for ensuring the
                completeness and accuracy of the information provided for the
                order placed.
              </p>
            </div>
            <div className="content-5 pt-10">
              <p className="font-bold underline pb-2">
                Restrictions, Limitations or Conditions of Purchase
              </p>
              <p>
                We may, without prior notice, limit the quantities sold in the
                Platform, cancel any order at any time, and/or refuse service to
                any customer. We will notify you through the email address or
                contact number you provided for any cancellation or change
                status in your order. We may also require verification of
                information prior to the acceptance and/or shipment of any
                order.
              </p>
            </div>
            <div className="content-6 pt-10">
              <p className="font-bold underline pb-2">Payment</p>
              <p>
                All prices indicated in the Platform are in Philippine Peso.
                When an order is placed in the Platform, you have the following
                payment options:
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer footerItems={footerItems} />
    </>
  );
};
