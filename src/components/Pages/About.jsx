
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About Me
                        </h2>
                        <p className="mt-6 text-gray-600">
                            I am a primeraly Java and Spring Boot developer who has worked on a 
                            Spring Boot Microservices project for a mobile banking app. I have worked on this project for past 2 years
                            and have gain in depth knoledge of developing a production grade Spring Boot Application. 
                        </p>
                        <p className="mt-4 text-gray-600">
                            And apart from Java and Spring on my own I have also learnt the kubernetes and React. I like to learn 
                            and implement new things. For this simple website also I have used React as fontend and appwrite as a 
                            backend as a service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}