const filePath = path.join(__dirname, "data", "restaurants.json");
function getStoredRestaurant() {

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  return storedRestaurants
}


function storeRestaurants() {
    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
}