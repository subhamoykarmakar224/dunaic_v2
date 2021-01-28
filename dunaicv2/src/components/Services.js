import React from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import CardService from './CardService';
import './css/Services.css';

function Services() {
  return (
    <div className="cards">
      <h3>Services we Provide</h3>
      <Container>
        <CardColumns>
          <CardService
            classprop=""
            src="/assets/img/services/website.jpg"
            title="   Website Design & Development"
            desc="We offer wide array of web design services from fresh development, maintenance, portals, e-commerce applications with ideas that deemed fit for each industry using our creative thoughts - blending aesthetic & functional features. Build websites that work effortlessly on all mobile and web platform.

            Using most updated and recent technologies for web development projects. Our team is dedicated to research & development of web tools for giving the best quality solution to customers across all industries.
            
            As a web design company, our creative team intricately visualizes each web designs using the aesthetic and responsive sense to achieve top quality standards"
          />

          <CardService
            classprop=""
            src="/assets/img/services/mobile.jpg"
            title="Mobile Application Design & Development"
            desc="Mobile application development by which application software is developed for handheld devices, such as personal digital assistants, enterprise digital assistants or mobile phones.

            We have the right experience to contribute to your mobile success. Understand the criticality of time in enterprise application development where our enterprise app developers make mobile application affordable.
            
            For Mobile App development, our team assists customers to meet the desired requirement for any industry. Be it Android or iOS, we are there to provide the best possible solution."
          />

          <CardService
            classprop=""
            src="/assets/img/services/software.jpg"
            title="Software Design & Development"
            desc="Custom Application Software development is the process to automate business process to get the optimum management decision making for any organization. Our dedicated engineers analyze, evaluate to give the most viable algorithm for achieving the desired result.

            Website development is a continuous creative process as followed by our company. We are evolving each day to scale new heights as a webdesign and development company."
          />

          <CardService
            classprop=""
            src="/assets/img/services/data_analysis.jpg"
            title="Data Analytics"
            desc="Data science & analytics defined as a blend of mathematics, business acumen, tools, algorithms and machine learning techniques. Providing hidden insights or patterns from raw data which can be of major use in the formation of big business decisions.

            With the amount of data being generated and the evolution in the field of Analytics, Data Science has turned out to be a necessity for companies. To make most out of their data, companies from all domains, be it Finance, Marketing, Retail, IT or Bank. All are looking for Data Scientists. This has led to a huge demand for Data Scientists all over the globe."
          />

          <CardService
            classprop=""
            src="/assets/img/services/iot.jpg"
            title="The Internet of Things (IoT)"
            desc="Our in-house capacity to provide end-to-end solutions involving embedded / hardware, software and networking functionalities enable us to deliver quite a few turnkey solutions to various industries in this space. Be it working with a multitude of sensors (humidity, temperature, electric current supply) or RFID tags; dabbling with protocols like ModBus and MQTT or with transient data storage; writing server side code or using different visualisation techniques across devices of various form factors, we have proven experience of quality delivery. We have worked with enterprise for automating features like: contact tracing, physical space occupancy, fall detection and more during the COVID situation. Motive of these solutions- capture sensor data, aggregate and send data to a server using DTM for analysis and storage, visualisation of the data and report generation for proper monitoring and analysis generation of alarms and multichannel notifications on preset events and breach of corner conditions."
          />

          <CardService
            classprop=""
            src="/assets/img/services/uav.jpg"
            title="UAVs/ULV/USV"
            desc="We build:-
            UAV: Unmanned Ariel Vehicle
            ULV: Unmanned Land Vehicle
            USV: Unmanned Submerged Vehicle
            for, on demand aerial delivery/surveillance platform for all environment: end-to-end solution integrating drones, docking stations and software solutions on cloud. We provide service to healthcare, e-commerce."
          />

          <CardService
            classprop=""
            src="/assets/img/services/vertical_farm.jpg"
            title="Sustainable Vertical Farming"
            desc="Its virtues, relative to conventional agriculture, have long been clear. Indoors, the climate can be controlled year-round. Pests can be minimized, and with them pesticides. Water and nutrients can be applied in precise quantities. By going up rather than out, a vertical farm can produce more food per acre of land. And by siting close to an urban area, it can reduce long distribution chains, getting fresher food to customers’ tables, quicker. Our company is planning to come up with solutions that will not only provide sustainable vertical farming stacks but also provide fresh, organic and affordable solution to all mass.            "
          />
        </CardColumns>
      </Container>
    </div>
  )
}

export default Services;
