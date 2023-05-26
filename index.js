const express = require("express");
const app=express();
app.use(express.json());

//Question 1:Creating a Room with:
//Ans:
const hallData = [
    {
      id: "1",
      numberOfSeats: 100,
      amenities: ["Ac", "chairs", "discolights"],
      price: 5000,
      ifBooked: "true",
      customerName: "Sanjay",
      date: "05-feb-2022",
      startTime: "10-feb-2022 at 12PM",
      endTime: "11-feb-2020 at 11am",
      RoomId: 201,
      RoomName: "Duplex",
    },
    {
      id: "2",
      numberOfSeats: 100,
      amenities: ["Ac", "chairs", "discolights"],
      price: 5000,
      ifBooked: "false",
      customerName: "",
      date: "",
      startTime: "",
      endTime: "",
      RoomId: 202,
      RoomName: "Duplex",
    },
    {
      id: "3",
      numberOfSeats: 50,
      amenities: ["Ac", "chairs"],
      price: 3000,
      ifBooked: "false",
      customerName: "",
      date: "",
      startTime: "",
      endTime: "",
      RoomId: 203,
      RoomName: "Classic",
    },
    {
      id: "4",
      numberOfSeats: 100,
      amenities: ["Ac", "chairs", "discolights"],
      price: 5000,
      ifBooked: "true",
      customerName: "Suresh",
      date: "03-feb-2022",
      startTime: "15-feb-2022 at 12PM",
      endTime: "16-feb-2020 at 11am",
      RoomId: 204,
      RoomName: "Duplex",
    },
    {
      id: "5",
      numberOfSeats: 200,
      amenities: ["Ac", "chairs", "discolights", "buffet"],
      price: 9000,
      ifBooked: "true",
      customerName: "Vidhya",
      date: "06-feb-2022",
      startTime: "11-feb-2022 at 12PM",
      endTime: "12-feb-2020 at 11am",
      RoomId: 205,
      RoomName: "Suite",
    },
  ];

app.get("/",(req,res)=>{
    res.send("Welcome to hall ticket booking")
    }
)
app.get("/hall-details",(req,res)=>{
    res.send(hallData)
}
)

//Question 2:Booking a Room with:

app.put("/edit/hall-details/:id", (req, res) => {
    const { id } = req.params;
    let filteredHall = hallData.filter((hall) => hall.id === id)
     if (filteredHall[0].ifBooked === "true") {
      return res.status(400).send("Hey this room is already booked");
      }
      return res.send(filteredHall); 
});
  
  //Question 3: List all Rooms with booked data with:
  //Ans:
  app.get("/hall-details/rooms", (request, response) => {
    const { ifBooked, numberOfSeats } = request.query;
    //console.log(request.query, ifBooked);
    //console.log(request.query, numberOfSeats);
    let filteredHall = hallData;
    if (ifBooked) {
      filteredHall = filteredHall.filter((halls) => halls.ifBooked === ifBooked);
    }
    if (numberOfSeats) {
      filteredHall = filteredHall.filter(
        (halls) => halls.numberOfSeats >= +numberOfSeats
      );
    }
    response.send(filteredHall);
  });
  //Question 4:  List all customers with booked data with:
  //Ans:
  app.get("/hall-details/customers", (request, response) => {
    const { ifBooked, numberOfSeats } = request.query;
    //console.log(request.query, ifBooked);
    //console.log(request.query, numberOfSeats);
    let filteredHall = hallData;
    if (ifBooked) {
      filteredHall = filteredHall.filter((halls) => halls.ifBooked === ifBooked);
    }
    if (numberOfSeats) {
      filteredHall = filteredHall.filter(
        (halls) => halls.numberOfSeats >= +numberOfSeats
      );
    }
    response.send(filteredHall);
  });

  //Question 5: List how many times a customer has booked the room with below details:
 //Ans:
 app.get("/hall-details",(req,res)=>{
    res.send(hallData)
}
) 
app.listen(9000,()=>console.log(`Server started in localhost:9000`));