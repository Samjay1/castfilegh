const header = ({image})=>{
    return(
        <div className="lg:h-80 h-56 rounded-xl relative shadow-lg">
            <img className="h-full w-full object-cover rounded-xl " src={image? `https://apicastfilegh.votellaverify.com/${image}` :"https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_1280.jpg"} alt="" />
            <div className="block h-36 absolute w-full lg:mx-auto lg:bottom-4 lg:mt-10 top-20 text-center">
                <p className="lg:text-5xl text-2xl text-white rounded-xl font-bold text-center opacity-75 inline p-5 bg-gray-900">Nomination form</p>
                {/* <p className="text-base text-black h-20 rounded-xl font-bold text-center opacity-75 block p-3 m-5 bg-gray-100">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim itaque vero, saepe optio, pariatur,
                    est aperiam mollitia eaque id nesciunt corporis architecto tempore dolorem sapiente exercitationem quibusdam totam vel?
                </p> */}
            </div>
        </div>
    )
}

export default header;