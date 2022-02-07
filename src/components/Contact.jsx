import React from 'react'
import { Button } from 'react-bootstrap'

function Contact(props) {
  return (
    <div className="px-5 mx-5 border rounded">
      <h2>Lets get in touch!</h2>
      <p>
        Please don't hesitate to reach out to me. Currently seeking for new
        opportunities as a software developer!
      </p>
      <Button
        target="_blank"
        href="https://docs.google.com/document/d/1Lt034c10GZbee5C5HP4-xRcgYfENJovQi18C4fC_Cxc/edit?usp=sharing"
        variant="outline-*"
      >
        <strong>
          <em>
            <u>click here for my Resume</u>
          </em>
        </strong>
      </Button>
    </div>
  )
}

export default Contact
