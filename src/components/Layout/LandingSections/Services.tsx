

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import React, { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Box, Button, Typography, Paper } from '@mui/material';
// import { images } from '../../../utils/importedImages';
// import HeroSlider,{Slider} from 'hero-slider';



const Services = () => {

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const [index, setIndex] = useState(0);


    // useEffect(() => {
    //     console.log(images)
    // }, [])
    return (
        <section id='services'>
            <h1>Our Services</h1>
            {/* <p>
                At our company, we offer a comprehensive range of services designed to meet the diverse needs of our clients. Our expertise spans various industries, and we are committed to delivering solutions that drive success and innovation. Our services are tailored to help you achieve your goals, whether you are looking to enhance efficiency, optimize operations, or embrace new technologies.

                <h2>Consulting Services</h2>
                Our consulting services provide you with the insights and expertise needed to navigate the complexities of today's business environment. Our team of experienced consultants works closely with you to understand your unique challenges and opportunities. We offer strategic guidance and practical solutions to help you achieve your objectives. From business strategy and process optimization to technology implementation and change management, our consulting services are designed to drive measurable results.

                <h2>Technology Solutions</h2>
                In the rapidly evolving world of technology, staying ahead of the curve is crucial. Our technology solutions are designed to help you leverage the latest advancements to achieve your goals. We offer a wide range of services, including software development, system integration, and IT infrastructure management. Our team of experts works with you to develop custom solutions that meet your specific needs and drive innovation. Whether you are looking to implement new software, upgrade your systems, or improve your IT operations, we have the expertise to help you succeed.

                <h2>Digital Transformation</h2>
                Digital transformation is more than just a buzzword; it is a critical component of business success in the modern age. Our digital transformation services help you harness the power of digital technologies to create new value and drive growth. We work with you to develop and implement a digital strategy that aligns with your business objectives. From enhancing customer experiences and optimizing operations to creating new business models and revenue streams, our digital transformation services enable you to stay competitive in a digital world.

                <h2>Data Analytics</h2>
                Data is one of the most valuable assets in today's business landscape. Our data analytics services help you unlock the full potential of your data to drive informed decision-making and achieve better outcomes. We offer a range of services, including data analysis, data visualization, and predictive analytics. Our team of data experts works with you to develop and implement data-driven strategies that provide actionable insights and drive business success. Whether you are looking to improve operational efficiency, enhance customer experiences, or drive innovation, our data analytics services can help you achieve your goals.

                <h2>Cybersecurity</h2>
                In an increasingly connected world, protecting your data and systems is more important than ever. Our cybersecurity services provide you with the tools and expertise needed to safeguard your business against cyber threats. We offer a comprehensive range of services, including risk assessments, security audits, and incident response. Our team of cybersecurity experts works with you to develop and implement a robust security strategy that protects your assets and ensures compliance with industry regulations. From threat detection and prevention to incident response and recovery, our cybersecurity services help you stay secure in a digital world.

                <h2>Training and Development</h2>
                Investing in the development of your team is essential for long-term success. Our training and development services provide you with the skills and knowledge needed to stay competitive in today's fast-paced business environment. We offer a range of training programs, including leadership development, technical training, and soft skills development. Our team of experienced trainers works with you to develop customized training solutions that meet your specific needs and objectives. Whether you are looking to enhance your team's technical skills, develop future leaders, or improve overall performance, our training and development services can help you achieve your goals.

                <h2>Support and Maintenance</h2>
                Ensuring the ongoing performance and reliability of your systems is critical to your success. Our support and maintenance services provide you with the peace of mind that comes from knowing your systems are in good hands. We offer a range of services, including technical support, system monitoring, and preventive maintenance. Our team of support experts works with you to ensure your systems are running smoothly and efficiently, minimizing downtime and maximizing productivity. Whether you need ongoing support, emergency assistance, or regular maintenance, our support and maintenance services are here to help.

                We are committed to delivering exceptional services that drive success and innovation for our clients. Our team of experts is dedicated to understanding your unique needs and providing solutions that deliver measurable results. Contact us today to learn more about how our services can help you achieve your goals and drive business success.
            </p> */}
            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                <AutoPlaySwipeableViews
                    axis="x-reverse"
                    index={index}
                    onChangeIndex={() => setIndex(index)}
                    enableMouseEvents
                    interval={3000}
                >
                    {/* {images.map((img, i) => (
                        <div key={i}>
                            <img
                                sx={{
                                    height: 255,
                                    display: 'block',
                                    maxWidth: 400,
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={img}
                                alt={`Photo ${i + 1}`}
                            />
                        </div>
                    ))} */}
                </AutoPlaySwipeableViews>
            </Box>
        </section>
    )
}

export default Services
