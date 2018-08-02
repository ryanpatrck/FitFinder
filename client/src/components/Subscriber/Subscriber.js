import React from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
var api_key = process.env.API_KEY;
var api_secret= process.env.API_Secret;
class Subscriber extends React.Component {
  constructor(props) {
    super(props);
 
    this.subscriberProperties = {
      preferredFrameRate: 15,
      showControls: false,
      width: 1020, 
      height: 1020,
    };

    this.publisherProperties ={
      width: 1020, 
      height: 1020,
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
        
     
        <OTStreams>
          <OTSubscriber 
           properties={this.subscriberProperties}
           eventHandlers={this.subscriberEventHandlers}
          />
        </OTStreams>
      </OTSession>
       
        

    );
  }
}

export default Subscriber;
