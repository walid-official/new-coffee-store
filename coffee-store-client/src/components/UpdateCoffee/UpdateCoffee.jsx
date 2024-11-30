import { NavLink, useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {
const updateData = useLoaderData();
console.log(updateData);
    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const Coffee = {name,chef,supplier,test,category,details,photo};
        console.log(Coffee);
        fetch(`https://coffee-store-server-jade-iota.vercel.app/coffeeStore/${updateData._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Coffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert("Successfully Updated Your Profile")
            }
        })
    }


    return (
        <div className="bg-[#F4F3F0] w-[80%] mx-auto my-20 p-10">
          <div className="">
            <NavLink to="/"><button className="btn bg-slate-600 text-white">Go Back</button></NavLink>
          </div>
        <div className="text-center">
          <h2 className="text-[#374151] text-3xl font-bold">Add New Coffee</h2>
          <p className="text-[#1B1A1AB3] w-[70%] mx-auto py-3">
            It is a long established fact that a reader will be distraceted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <label className="font-bold text-xl block my-2">Name</label>
              <input className="w-full rounded py-3 px-6" type="text" defaultValue={updateData?.name}  name="name" placeholder="Enter Coffee Name" id="" />
            </div>
            <div className="">
              <label className="font-bold text-xl block my-2">Chef</label>
              <input className="w-full rounded py-3 px-6" type="text" defaultValue={updateData?.chef} name="chef" placeholder="Enter Coffee Chef" id="" />
            </div>
            <div className="">
              <label className="font-bold text-xl block my-2">Supplier</label>
              <input className="w-full rounded py-3 px-6" type="text" defaultValue={updateData?.supplier} name="supplier" placeholder="Enter Coffee Supplier" id="" />
            </div>
            <div className="">
              <label className="font-bold text-xl block my-2">Taste</label>
              <input className="w-full rounded py-3 px-6" type="text" defaultValue={updateData?.test}  name="test"  placeholder="Enter Coffee Taste" id="" />
            </div>
            <div className="">
              <label className="font-bold text-xl block my-2">Category</label>
              <input className="w-full rounded py-3 px-6" type="text" defaultValue={updateData?.category}  name="category" placeholder="Enter Coffee Category" id="" />
            </div>
            <div className="">
              <label className="font-bold text-xl block my-2">Details</label>
              <input className="w-full rounded py-3 px-6" type="text" defaultValue={updateData?.details}  name="details" placeholder="Enter Coffee Details" id="" />
            </div>
          </div>
          <div className="">
              <label className="font-bold text-xl block my-2">Photo</label>
              <input className="w-full rounded py-3 px-6" type="text" defaultValue={updateData?.photo}  name="photo"  placeholder="Enter Photo URL" id="" />
            </div>
            <div className="">
              <button  className="btn bg-[#E3B577] py-3 px-8 my-3 w-full text-xl font-semibold">Add Coffee</button>
            </div>
        </form>
      </div>
    );
};

export default UpdateCoffee;