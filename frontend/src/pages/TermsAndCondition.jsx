import Navbar from "../components/Navbar";
import useDocumentTitle from "../shared/useDocumentTitle";

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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
