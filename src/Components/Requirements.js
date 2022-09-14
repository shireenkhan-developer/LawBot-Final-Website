import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Navbar from "./navbar";
import Contact from "./Contact";
import Footer from "./Footer";
const Requirements = () => {
    const [open, setOpen] = useState(false);

  return (
  
    <div>
        <Navbar/>
     
          <h1 className="display-3 text-center" id="sec2">
        REQUIREMENTS
     </h1>
     <br></br>
        <div className='list'>
        
        <Card style={{ width: '18rem' }}>
        
      <Card.Body>
        <Card.Title>Functional Requirements</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">AI-Based Lawyer 20 FR</Card.Subtitle>
        <Card.Text>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        size="sm"
        variant="secondary"
      >
        Expand
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <ListGroup as="ol" numbered >
      <ListGroup.Item as="li">User Should be able to register by providing information like email,name and password.</ListGroup.Item>
      <ListGroup.Item as="li">User should be able to login by providing credentials.</ListGroup.Item>
      <ListGroup.Item as="li">User should be able to logout from the system at any time.</ListGroup.Item>
      <ListGroup.Item as="li">System should be able to validate data entry of a particular user.</ListGroup.Item>
      <ListGroup.Item as="li">User must be able to update his profile by editing existing fields.</ListGroup.Item>
      <ListGroup.Item as="li">System should have an option of choosing lawyer type like Family lawyer,Criminal Defense
                        lawyer,Business lawyer,Estate Planning lawyer etc.</ListGroup.Item>
      <ListGroup.Item as="li">System should allow users to chat i.e. user can input his query in form of a text string.</ListGroup.Item>
      <ListGroup.Item as="li">System should provide feedback by informing users if a response is not clear or unavailable.</ListGroup.Item>
      <ListGroup.Item as="li">System shall inform the user about spelling mistakes and will ask to rephrase his message by
                        "autocorrect" feature.</ListGroup.Item>
      <ListGroup.Item as="li">The system shall inform the user about the validity of the sentence and answer the question
                        asked.</ListGroup.Item>
      <ListGroup.Item as="li">User must be able to save the chat i.e a history/log is maintained in a database like MySQL</ListGroup.Item>
      <ListGroup.Item as="li">System should provide suggestions of questions to the user for better response.</ListGroup.Item>
      <ListGroup.Item as="li">System should notify user of new court decisions that can affect his case.</ListGroup.Item>
      <ListGroup.Item as="li">It should have an option of Voice-to-Text speech (for those who can't type).</ListGroup.Item>
      <ListGroup.Item as="li">The chat window will show an error message if there is a network issue.</ListGroup.Item>
      <ListGroup.Item as="li">Language used must be understandable preferably English will be used for now.</ListGroup.Item>
      <ListGroup.Item as="li">It should be Web-Based as well as Android application.</ListGroup.Item>
      <ListGroup.Item as="li">It should be integrated with a database of PPC (Pakistan Penal Code) and Constitution , to
                        answer queries accordingly.</ListGroup.Item>
      <ListGroup.Item as="li">Feedback mechanism for users to rate the conversation in order to make imrpovements.</ListGroup.Item>
      <ListGroup.Item as="li">It will use API's to fetch user's information from different applications to ensure maximum
                        engangement and flexible solutions.</ListGroup.Item>
    
    </ListGroup>
        </div>
        
    </Collapse>
        </Card.Text>
    
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Non-Functional Requirements</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">AI-Based Lawyer 20 NFR</Card.Subtitle>
        <Card.Text>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text2"
        aria-expanded={open}
        size="sm"
        variant="secondary"
      >
        Expand
      </Button>
      <div id="example-collapse-text">
      <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">Speed: System should give response/legal advice in fraction of seconds by fetching data from the
                        server quickly. For slow operation, system should provide users with progress level.</ListGroup.Item>
      <ListGroup.Item as="li">Confidential: All the user's information should be confidential and only available to the user
                        currently logged in and any unauthorized access must be denied.</ListGroup.Item>
      <ListGroup.Item as="li">Secure: The system should withstand malware attacks by keeping it up-to-date and patched or
                        providing least privilege to the users.</ListGroup.Item>
      <ListGroup.Item as="li">Privacy: User's data should be kept private and users have to authenticate themselves before
                        being able to query information from the bot.</ListGroup.Item>
      <ListGroup.Item as="li">Usability: The system interface should be user friendly and easy to understand a new user will
                        make less than 3 mistakes after 5 minutes use.</ListGroup.Item>
      <ListGroup.Item as="li">Robust: System should be able to recover from errors by coping with incorrect/unexpected input.</ListGroup.Item>
      <ListGroup.Item as="li">Reusability: It should have chances of reusing a software component in developing a new system.</ListGroup.Item>
      <ListGroup.Item as="li">Performance: Expectations regarding response time, multiple user handling capacity should be
                        fulfilled by the system.</ListGroup.Item>
      <ListGroup.Item as="li">Efficiency: The process time and resource usage of the system should be controlled and
                        efficient.</ListGroup.Item>
      <ListGroup.Item as="li">Adaptiveness: The system should have the ability to be modified, improved or scaled.</ListGroup.Item>
      <ListGroup.Item as="li">Visual language must be well defined.The GUI must provide users with icons, buttons and a
                        consistent layout.</ListGroup.Item>
      <ListGroup.Item as="li">System must provide an error feedback in case of exceptions like if a user fails to complete a
                        task.</ListGroup.Item>
      <ListGroup.Item as="li">Responsiveness: System should adjust to different windows sizes like desktop/mobile phone etc.
                        accordingly.</ListGroup.Item>
      <ListGroup.Item as="li">Scalability: The system must be able to integrate with newer versions seamlessly.</ListGroup.Item>
      <ListGroup.Item as="li">Availabilty: It should be available 24/7. whenever the user needs it.</ListGroup.Item>
      <ListGroup.Item as="li">Portability: It should be able to run on different systems without any error.</ListGroup.Item>
      <ListGroup.Item as="li">Maintainability: System should adapt to changes i.e. it shuld be ready for any fault corrections
                        or new increments.</ListGroup.Item>
      <ListGroup.Item as="li">Talking to the bot should feel like talking to a person (the bot should not reply instantly, 1-2
                        second delay between responses).</ListGroup.Item>
      <ListGroup.Item as="li">Reliability: System should recover from errors fastly and failure rate should be less.</ListGroup.Item>
      <ListGroup.Item as="li">User's expectations must be fulfilled by the system.</ListGroup.Item>
    
    </ListGroup>
      </div>
        
        </Card.Text>
    
      </Card.Body>
    </Card>
        </div>
        <hr></hr>
        <Contact/>
      <Footer/>
    </div>

  )
}

export default Requirements
