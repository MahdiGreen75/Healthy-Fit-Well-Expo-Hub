import "../Testimonial/Testimonial.css"

const FAQs = () => {
    return (
        <div>

            <div>
                <section className="text-gray-700">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white text mb-4">
                                Frequently Asked Question
                            </h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white text">
                                The most common questions about how our business works and what
                                can do for you.
                            </p>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-white drop-shadow-xl border rounded-md py-2 px-4">
                                    What types of health events can your company manage?
                                    </summary>

                                    <span>
                                    We specialize in managing a wide range of health-related events, including medical conferences, wellness expos, health fairs, workshops, seminars, and health awareness campaigns. Our experienced team can tailor our services to meet the specific needs of your event.
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold bg-white drop-shadow-xl border rounded-md py-2 px-4">
                                    How do I register for upcoming health events?
                                    </summary>

                                    <span>
                                    Registering for one of our upcoming health events is a straightforward process. First, visit the event page on our website that corresponds to the event you wish to attend. Once there, you'll find a prominently displayed "Register Now" button. Clicking on this button will initiate the registration process.
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-white drop-shadow-xl border rounded-md py-2 px-4">
                                    Can I become a speaker at your health events?
                                    </summary>

                                    <span>
                                    Absolutely, we welcome applications from qualified speakers and presenters who can contribute valuable insights and expertise to our health events. To get started, please visit the "Speakers and Presenters" section of our website.
                                    </span>
                                </details>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-white drop-shadow-xl border rounded-md py-2 px-4">
                                    Are sponsorship opportunities available for businesses at events?
                                    </summary>

                                    <span className="px-4 py-2">
                                    Yes, we offer a range of sponsorship opportunities for businesses and organizations interested in supporting and partnering with us for our health events. Our sponsorship packages are designed to provide visibility and recognition to our partners while aligning with the specific goals and target audience of each event. For detailed information about the available sponsorship levels
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-white drop-shadow-xl border rounded-md py-2 px-4">
                                    What COVID-19 safety measures apply to in-person events?
                                    </summary>

                                    <span className="px-4 py-2">
                                    The safety and well-being of our attendees are our utmost priorities. We closely monitor and adhere to the latest COVID-19 guidelines and recommendations provided by public health authorities and government agencies. The specific safety measures in place for each in-person event may vary based on the prevailing circumstances at the time. 
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-white drop-shadow-xl border rounded-md py-2 px-4">
                                    How can I contact your team for assistance?
                                    </summary>

                                    <span className="px-4 py-2">
                                    you can send us an email at [email address] to communicate your inquiries or requests. We monitor our email regularly and will provide a timely response to your message. Please feel free to reach out to us through the contact method that suits you best; we are here to assist you and provide any information you may need regarding our health event management services.
                                    </span>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default FAQs;