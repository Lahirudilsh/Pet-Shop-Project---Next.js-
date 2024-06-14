import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.scss'
import Image from 'next/image';
import blogBg from '@/images/30.png'
import Newsletter from '@/components/newsletter/newsLetter';
import BlogSec from '@/components/Blog-Sec/blog-sec';

export default function blogpage() {
  return (
    <div>
      <div className="full-bg-image">
        <Image src={blogBg} className="w-100 blogBg" alt="Hero Image" />
          <Container>
            <div className="header-text">
              <h1>Furry Friends Forum</h1>
            </div>
          </Container>

      </div>
      {/* <BlogSec/> */}
      <Newsletter/>
    </div>
  );
}
