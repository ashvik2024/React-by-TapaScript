import React from 'react'

const users = [
  {
    id: 1,
    name: "Aarav Singh",
    phone: "+91-98765-43210",
    email: "aarav.singh@example.com",
    photo: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Maya Kapoor",
    phone: "+91-91234-56789",
    email: "maya.kapoor@example.com",
    photo: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Rohit Mehra",
    phone: "+91-99887-77665",
    email: "rohit.mehra@example.com",
    photo: "https://randomuser.me/api/portraits/men/76.jpg"
  },
  {
    id: 4,
    name: "Sana Patel",
    phone: "+91-90123-45678",
    email: "sana.patel@example.com",
    photo: "https://randomuser.me/api/portraits/women/55.jpg"
  },
  {
    id: 5,
    name: "Imran Khan",
    phone: "+91-90909-90909",
    email: "imran.khan@example.com",
    photo: "https://randomuser.me/api/portraits/men/91.jpg"
  },
  {
    id: 6,
    name: "Neha Joshi",
    phone: "+91-95678-12345",
    email: "neha.joshi@example.com",
    photo: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    id: 7,
    name: "Vikram Rao",
    phone: "+91-98000-11122",
    email: "vikram.rao@example.com",
    photo: "https://randomuser.me/api/portraits/men/24.jpg"
  },
  {
    id: 8,
    name: "Priya Sharma",
    phone: "+91-97777-33344",
    email: "priya.sharma@example.com",
    photo: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 9,
    name: "Daniel Fernandes",
    phone: "+91-96666-22233",
    email: "daniel.fernandes@example.com",
    photo: "https://randomuser.me/api/portraits/men/53.jpg"
  },
  {
    id: 10,
    name: "Anika Roy",
    phone: "+91-95555-44466",
    email: "anika.roy@example.com",
    photo: "https://randomuser.me/api/portraits/women/33.jpg"
  }
];

const Users = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {users.map((u) => (
        <div key={u.id} style={{ textAlign: "center", border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
          <img 
            src={u.photo} 
            alt={u.name} 
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
          <h2>{u.name}</h2>
          <p>{u.phone}</p>
          <p>{u.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Users;
