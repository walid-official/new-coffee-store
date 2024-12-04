import { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

const Dashboard = () => {
const [users,setUsers] = useState([]);
const [search,setSearch] = useState("");

useEffect(() => {
    fetch('https://coffee-store-server-jade-iota.vercel.app/users')
    .then(res => res.json())
    .then(data => setUsers(data))
},[])


useEffect(()=> {
  fetch(`http://localhost:5000/users/search?searchParams=${search}`)
  .then(res => res.json())
  .then(data => {
    setUsers(data)
  })
},[search])

  const handleValidation = (id) => {
    fetch(`http://localhost:5000/status/${id}`,{
      method: "PATCH"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const newData = users.map((user) => user._id === id ? {...user,isValidate: true} : user)
      setUsers(newData)
    })
  }


  const handleDelete = (id) => {
    fetch(`https://coffee-store-server-jade-iota.vercel.app/users/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const remaining = users.filter(user => user._id !== id);
      setUsers(remaining)
    })
  }

  return (
    <div className="w-11/12 mx-auto my-32">
      <div className=" w-[50%] mx-auto mb-20">

        <input onChange={(e) => setSearch(e.target.value)} type="text" className="w-full border py-3 px-4" placeholder="Search Here" name="" id="" />

      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Register Time</th>
              <th>Last Login</th>
              <th>Delete</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map((singleUser,index) => <tr key={singleUser._id}>
                    <th>{index + 1}</th>
                    <td>{singleUser.name}</td>
                    <td>{singleUser.email}</td>
                    <td>{singleUser.createdAt}</td>
                    <td>{singleUser.latestSignInTime}</td>
                    <td><button 

                      onClick={() => handleDelete(singleUser._id)}
                    
                    className="btn font-bold text-xl">x</button></td>
                    <td><button onClick={() => handleValidation(singleUser._id)} className="btn">  {singleUser.isValidate ? <IoMdDoneAll /> : <MdDone />}
                      </button></td>
                  </tr> )
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
