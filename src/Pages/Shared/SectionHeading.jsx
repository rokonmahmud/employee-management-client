/* eslint-disable react/prop-types */


const SectionHeading = ({heading, title}) => {
    return (
        <div>
            <div className=" w-3/12 mx-auto  my-8">
                <p className="text-center capitalize text-[#D99904] mb-4">{title}</p>
                <hr className="border-2" />
                <h3 className="uppercase text-2xl text-center my-4 font-semibold">{heading}</h3>
                <hr className="border-2"/>
            </div>
        </div>
    );
};

export default SectionHeading;