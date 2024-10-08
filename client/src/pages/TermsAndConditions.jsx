/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="flex justify-center min-h-[calc(90vh-5rem)] bg-white">
      <div className="w-full max-w-6xl bg-white p-8">
        <h2 className="text-2xl font-semibold text-black">
          Terms and Conditions
        </h2>
        <div className="mt-4 text-gray-700">
          <p>
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern our relationship with you in relation to this
            website. If you disagree with any part of these terms and
            conditions, please do not use our website.
          </p>
          <p>
            The term 'us' or 'we' refers to the owner of the website. The term
            'you' refers to the user or viewer of our website.
          </p>
          <p>
            The use of this website is subject to the following terms of use:
          </p>
          <ul className="list-disc pl-5">
            <li>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </li>
            <li>
              This website uses cookies to monitor browsing preferences. If you
              do allow cookies to be used, the personal information may be
              stored by us for use by third parties.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </li>
            <li>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services or information available through this website meet your
              specific requirements.
            </li>
            <li>
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms and conditions.
            </li>
            <li>
              All trademarks reproduced in this website, which are not the
              property of, or licensed to the operator, are acknowledged on the
              website.
            </li>
            <li>
              Unauthorized use of this website may give rise to a claim for
              damages and/or be a criminal offense.
            </li>
            <li>
              From time to time, this website may also include links to other
              websites. These links are provided for your convenience to provide
              further information. They do not signify that we endorse the
              website(s). We have no responsibility for the content of the
              linked website(s).
            </li>
            <li>
              Your use of this website and any dispute arising out of such use
              of the website is subject to the laws of [Your Country].
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center text-sm">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-300"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
