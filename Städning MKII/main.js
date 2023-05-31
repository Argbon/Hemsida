
const roomsInput = document.getElementById('rooms');
const bathroomsInput = document.getElementById('bathrooms');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

const pricePerRoomSEK = 500; 
const pricePerBathroomSEK = 250; 

calculateBtn.addEventListener('click', calculatePrice);

function calculatePrice() {
  const numRooms = parseInt(roomsInput.value);
  const numBathrooms = parseInt(bathroomsInput.value);

  if (isNaN(numRooms) || isNaN(numBathrooms)) {
    result.textContent = 'Please enter valid numbers.';
    return;
  }

  const totalPriceSEK = numRooms * pricePerRoomSEK + numBathrooms * pricePerBathroomSEK;
  result.textContent = `Total Price: ${totalPriceSEK} SEK`;
}