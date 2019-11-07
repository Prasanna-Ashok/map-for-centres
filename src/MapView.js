import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { keys } from "./config/keys";
import axios from "axios";
import { geolocated } from "react-geolocated";

const Marker = ({ text }) => <div><span><i className={ "fa fa-map-marker map-marker-current " + text}></i></span></div>;

class MapView extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : ""
        }
    }

  componentDidMount() {
    console.log("new");
    axios
      .get("http://5ab776ff3ddb860014f13ecb.mockapi.io/students")
      .then(response => {
        console.log(response.data);
        this.setState({
            ...this.state, data: response.data
        })
      })
      .catch(error => {
        console.log("error: ", error);
      });
  }


  render() {
      console.log(this.props)
    return (
      <div className="map-area">
      {this.props.coords ? 
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.map_key }}
          defaultCenter={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude }}
          defaultZoom={11}
        >
        { this.state.data ? this.state.data.map((e,i) => {
            return (<Marker text={'student'} lat={e.lat} lng={e.lan} key={i} />)
        })   : "" }
          <Marker
            text={'centre'}
            lat={this.props.coords.latitude}
            lng={this.props.coords.longitude}
          />
        </GoogleMapReact> : <h1 style={{position: 'fixed', left: "50%", top: "50%"}}>"Map Loading..."</h1>}
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(MapView);
