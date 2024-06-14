import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.scss'
import Image from 'next/image';
import termsBg from '@/images/38.png'
import Newsletter from '@/components/newsletter/newsLetter';
import BlogSec from '@/components/Blog-Sec/blog-sec';

export default function termsAndConditions() {
  return (
    <div>
      <div className="termsAndConditions">
        <Image src={termsBg} className="blogBg w-100" alt="Hero Image" />
        <Container>
            <div className="header-text">
                <h1>Terms & Conditions for Our Pet Shop</h1>
            </div>

            <div className="main-text">
                <h6>Welcome to Our Pet Shop! </h6>
                <p>These terms and conditions outline the rules and regulations for the use of Our Pet Shop Website. </p>
                <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Our Pet Shop if you do not agree to take all of the terms and conditions stated on this page.</p>

                <h6> Terminology:</h6>
                <p>The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements:</p>
                <p>“Client,” “You,” and “Your” refers to you, the person logging on to this website and compliant with the Company’s terms and conditions. “The Company,” “Ourselves,” “We,” “Our,” and “Us,” refers to our Company. “Party,” “Parties,” or “Us,” refers to both the Client and ourselves. Cookies: </p>
                <p>We employ the use of cookies. By accessing Our Pet Shop, you agreed to use cookies in agreement with the Our Pet Shop’s Privacy Policy.</p>

                <h6> License:</h6>
                <p> Unless otherwise stated, Our Pet Shop and/or its licensors own the intellectual property rights for all material on Our Pet Shop. All intellectual property rights are reserved. You may access this from Our Pet Shop for your own personal use subjected to restrictions set in these terms and conditions.</p>

                <h6>You must not:</h6>
                <li>Republish material from Our Pet Shop</li>
                <li>Sell, rent, or sub-license material from Our Pet Shop</li>
                <li>Reproduce, duplicate, or copy material from Our Pet Shop</li>
                <li>Redistribute content from Our Pet Shop</li>

                <h6>User Comments:</h6>
                <li>This Agreement shall begin on the date hereof.</li>
                <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Our Pet Shop does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Our Pet Shop, its agents, or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Our Pet Shop shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>

                <h6>Content Liability:</h6>
                <p>We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.</p>

                <h6>Reservation of Rights: </h6>
                <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions. </p>

                <h6>Removal of links from our website:</h6>
                <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly. </p>

                <h6>Disclaimer:</h6>
                <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will: </p>
                <li> Limit or exclude our or your liability for death or personal injury; </li>
                <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>Limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li>Exclude any of our or your liabilities that may not be excluded under applicable law. </li>
                <li>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.</li>
                <p className='mt-3'>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>


            </div>

        </Container>

      </div>
      {/* <BlogSec/> */}
      <Newsletter/>
    </div>
  );
}