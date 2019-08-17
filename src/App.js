import React, {useState, useEffect, useRef} from 'react';
import L from 'leaflet';
import './App.scss';

function SearchBar(props){

  const[input, setInput] = useState(null);

  return(
    <div className="searchBar">
      <form onSubmit= {(event) => {
        event.preventDefault();
        props.updateZip(input)}} id = "zipForm">
        <input type="text" id="zipInput" value={props.currentSearch} onChange={(event) => setInput(event.target.value)} placeholder="ZIP" required minLength="5" maxLength="5"></input>
      </form>
    </div>
  );
}

function Map(props){

  const [center, setCenter] = useState([39.8283, -98.5795]);
  const [locations, setLocations] = useState({});
  const map = useRef();
  const markers = useRef();

  //App needs a "current highlighted event state that is a prop here" and this needs a "locations state"


  //First render
  useEffect(() => {
    // Create the map with US center
		map.current = L.map('map', {
			zoomControl: false
		}).setView(center, (props.events != null) ? 8 : 4);

    //Initializes layergroup
    markers.current = L.layerGroup().addTo(map.current);

		// Set up the OSM layer
		L.tileLayer(
			'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
				maxZoom: 18
			}).addTo(map.current);

		L.control.zoom({
			position: 'topright'
		}).addTo(map.current);

  }, []);


  //When locations are updated, generate new markers
  useEffect(() => {

    if(Object.keys(locations).length > 0){
      markers.current.clearLayers();
      map.current.setView(center, 8);

      for (var key in locations) {

  			let cord = key.split("&");

  			L.marker([parseFloat(cord[0]), parseFloat(cord[1])]).bindPopup(locations[key]).addTo(markers.current);

  		}
    }
  }, [locations]);

  //Iterates through new events
  useEffect(() => {

    if(props.events != null){

      //Initiates map's focus at the first event (typically the closest to the provided zipcode) with a valid lat & long position
      let first = 0;
  		if (!('location' in props.events[first]) || !('location' in props.events[first]['location']) || !('latitude' in props.events[first]['location']['location'])) {
  			first++;
  		}

      var lat = props.events[first]['location']['location']['latitude'];
      var long = props.events[first]['location']['location']['longitude'];

      if(center[0] !== lat || center[0] !== long){
        setCenter([lat, long]);

      }

      var places = {};

      props.events.forEach(function(event, index) {

  			//If has longitude and latitute
  			if ('location' in event && 'location' in event['location'] && 'latitude' in event['location']['location']) {

  				//Creates string key for {places} dictionary
  				let str = event['location']['location']['latitude'] + "&" + event['location']['location']['longitude'];
  				//Creates or adds to a location - adds HTML code for event list for that location
  				if (str in places) {
  					places[str] = places[str] + "\n<div class=\"eventCard\" id=" + event['id'] + "><a href=" + event['browser_url'] + "><div class=\"eventCard\">" + "<h3>" + event['title'] + "</h3></div></a></div>";
  				} else {
  					places[str] = "<div class=\"eventCard\" id=" + event['id'] + "><a href=" + event['browser_url'] + "><div>" + "<h3>" + event['title'] + "</h3></div></a></div>";
  				}

  			}
  		});
      setLocations(places);
    }

  }, [props.events]);


  return(
    <div id="map"></div>
  );
}

function App() {
  const [events, setEvents] = useState(null);
  const [currZip, setCurrZip] = useState(null);

  //Makes API call when zipcode entered
  useEffect(() => {

    if(currZip != null){
      fetch("https://api.mobilize.us/v1/organizations/1316/events?timeslot_start=gte_now&zipcode=" + currZip)
      .then((res)=>res.json())
      .then((data)=>setEvents(data['data']));
    }


  }, [currZip]);

  return (
    <div className="app">
      <SearchBar currZip={currZip} updateZip={(newZip) => setCurrZip(newZip)}/>
      <Map currZip={currZip} events={events}/>
    </div>
  );
}

export default App;
