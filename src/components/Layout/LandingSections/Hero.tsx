import React from 'react'
import logo from '../../../assets/images/logo.jpeg'

const Hero = () => {
    return (
        <section id="home"
            style={{
                backgroundImage: `url(${logo})`,
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>Welcome to Our Revolutionary Platform</h1>
            {/* <p>
                In a world where technology and innovation are rapidly transforming every aspect of our lives, our platform stands at the forefront, offering unprecedented solutions that redefine what's possible. Our mission is to harness the power of cutting-edge technology to create a seamless and efficient experience for our users. We believe in the limitless potential of human ingenuity and are committed to pushing the boundaries of what's possible, making the impossible a reality.

                Our platform is built on the principles of excellence, innovation, and customer satisfaction. We understand that in today's fast-paced world, time is of the essence, and efficiency is paramount. That's why we've designed our platform to be intuitive, user-friendly, and incredibly powerful, enabling you to achieve your goals faster and more effectively than ever before.

                At the heart of our platform is a robust and scalable infrastructure that ensures reliability and performance at every level. Whether you're an individual user looking to streamline your daily tasks or a large enterprise seeking to optimize your operations, our platform is equipped to meet your needs. With advanced features and functionalities, our platform empowers you to work smarter, not harder.

                We are dedicated to providing unparalleled support and service to our users. Our team of experts is always on hand to assist you with any questions or challenges you may encounter. We believe that our success is intrinsically linked to your success, and we are committed to helping you achieve your objectives. Our support team is available around the clock to ensure that you have the assistance you need, whenever you need it.

                Innovation is at the core of everything we do. We are constantly exploring new technologies and methodologies to enhance our platform and deliver even greater value to our users. Our research and development team is tirelessly working on new features and improvements, ensuring that our platform remains at the cutting edge of technology. We are passionate about staying ahead of the curve and continuously evolving to meet the changing needs of our users.

                Our commitment to security and privacy is unwavering. We understand the importance of safeguarding your data and maintaining your trust. Our platform is designed with comprehensive security measures to protect your information and ensure your privacy. We adhere to the highest standards of data protection and are continuously monitoring and updating our security protocols to address emerging threats and vulnerabilities.

                Collaboration and community are integral to our platform's success. We believe in the power of collective intelligence and the strength of diverse perspectives. Our platform fosters a collaborative environment where users can connect, share ideas, and work together towards common goals. We are proud to support a vibrant and dynamic community of users who are passionate about making a positive impact.

                Our vision is to create a world where technology enhances and enriches every aspect of our lives. We are driven by a desire to make a meaningful difference and to contribute to the betterment of society. By leveraging the power of technology, we aim to solve complex problems and create innovative solutions that improve the quality of life for people around the globe.

                As we look to the future, we are excited about the endless possibilities that lie ahead. We are committed to continuing our journey of innovation, excellence, and growth. Our platform is a testament to our dedication and our unwavering belief in the transformative power of technology. We invite you to join us on this exciting journey and to experience the future of technology today.

                Thank you for choosing our platform. We are honored to have you as part of our community and look forward to serving you with excellence and innovation.
            </p> */}
        </section>
    )
}

export default Hero
