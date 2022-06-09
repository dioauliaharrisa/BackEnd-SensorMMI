
const [address, setAddress] = useState([]);
const [location, setLocation] = useState(null);

useEffect(() => {
  t = setInterval(() => {
      (async () => {

          let currentLocation = await Location.getCurrentPositionAsync({});
          let currentAddress = await Location.reverseGeocodeAsync({
              latitude: currentLocation.coords.latitude,
              longitude: currentLocation.coords.longitude,
          });

          setAddress(address.push(currentAddress));
          setLocation(currentLocation);
          
      })();

  }, 10000);

  return () => {
      clearInterval(t);
  };
}, []);



