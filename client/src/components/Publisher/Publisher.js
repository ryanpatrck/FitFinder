import React from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import './Publisher.css'
class Publisher extends React.Component {
  constructor(props) {
    super(props);
 
    this.subscriberProperties = {
      preferredFrameRate: 15,
      showControls: false,
      width: 1000, 
      height: 500,
    };

    this.publisherProperties ={
      width: 1000, 
      height: 500,
    }
 
    this.subscriberEventHandlers = {
      videoDisabled: event => {
        console.log('Subscriber video disabled!');
      },
      videoEnabled: event => {
        console.log('Subscriber video enabled!');
      }
    };
  }
  render() {
    console.log(process);
    return (
      <OTSession apiKey='46156272' sessionId="1_MX40NjE1NjI3Mn5-MTUzMzE3ODEyNDEwMX50L3VuVW04ckgrRDd0ZnFPUVBONTRvQzZ-UH4" token="T1==cGFydG5lcl9pZD00NjE1NjI3MiZzaWc9YWE0NTE3NzA4NzAxMzg4MDZkNWY3ZTBkZmY5OGFhMzgzODFiZDczNTpzZXNzaW9uX2lkPTFfTVg0ME5qRTFOakkzTW41LU1UVXpNekUzT0RFeU5ERXdNWDUwTDNWdVZXMDRja2dyUkRkMFpuRlBVVkJPTlRSdlF6Wi1VSDQmY3JlYXRlX3RpbWU9MTUzMzE3ODE3MyZub25jZT0wLjE4NzU3NDYxMTA4MzQ3NTI4JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1MzU3NzAxNzImaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=">
        
        <OTPublisher
          properties={this.publisherProperties}
          eventHandlers={this.publisherEventHandlers}
        />
      </OTSession>
       
        

    );
  }
}

export default Publisher;