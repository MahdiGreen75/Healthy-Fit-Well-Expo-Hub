

const Products = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <div className="bg-blue-500 rounded-md shadow-2xl p-5 w-52">
                <img src="https://i.ibb.co/4gtqGgf/sp1.png" />
            </div>
            <div className="bg-white rounded-md shadow-2xl p-5 max-w-4xl">
                <h1 className="text-xl font-semibold">Whey Protein</h1>
                <div className="space-y-4 text-base font-normal">
                    <p>
                        Introducing our premium whey protein product, a top-tier nutritional supplement designed to elevate your fitness journey and overall well-being. Crafted with care, our whey protein is sourced from the finest quality milk and processed to perfection.
                    </p>

                    <p>
                        Our whey protein comes in two fantastic variants: Whey Protein Concentrate (WPC) and Whey Protein Isolate (WPI). Our WPC offers a balanced blend of protein, retaining beneficial fats and carbohydrates, while our WPI boasts a pure protein punch, ideal for those seeking maximum protein content with minimal extras.
                    </p>

                    <p>
                        Packed with essential amino acids, our whey protein promotes muscle growth and repair, making it a must-have for athletes and fitness enthusiasts. It aids in post-workout recovery, reducing muscle soreness and supporting overall health. With its exceptional taste and easy mixability, it's perfect for shakes, smoothies, and creative recipes.
                    </p>

                    <p>
                        We take quality seriously. Our whey protein undergoes rigorous testing for purity and is free from artificial additives and fillers. Whether you're striving for peak performance, managing your weight, or simply nourishing your body, our whey protein product is your trusted partner on the path to better health and fitness. Embrace the power of protein with our exceptional whey protein today!
                    </p>
                </div>
                <div className="flex justify-center items-center my-5">
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white rounded-md ">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Products;