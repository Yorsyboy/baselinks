import React from "react";

const Member = [
  {
    name: "Samson Balogun",
    title: "Chief Brand Officer",
    image:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80",
    socials: [
      {
        name: "linkedin",
        icon: "mdi mdi-linkedin",
      },
      {
        name: "twitter",
        icon: "mdi mdi-twitter",
      },
      {
        name: "instagram",
        icon: "mdi mdi-instagram",
      },
    ],
  },
  {
    name: "Adriana Francis",
    title: "HR Manager",
    image:
      "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80",
    socials: [
      {
        name: "linkedin",
        icon: "mdi mdi-linkedin",

      },
      {
        name: "twitter",
        icon: "mdi mdi-twitter"
      },
      {
        name: "instagram",
        icon: "mdi mdi-instagram",

      },
    ],
  },
  {
    name: "Michael Inwang",
    title: "Art Director",
    image:
      "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80",
    socials: [
      {
        name: "linkedin",
        icon: "mdi mdi-linkedin",

      },
      {
        name: "twitter",
        icon: "mdi mdi-twitter"
      },
      {
        name: "instagram",
        icon: "mdi mdi-instagram",

      },
    ],
  },
  {
    name: "Ovie Erute",
    title: "Cinematographer and Editor",
    image:
      "https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80",
    socials: [
      {
        name: "linkedin",
        icon: "mdi mdi-linkedin",

      },
      {
        name: "twitter",
        icon: "mdi mdi-twitter"
      },
      {
        name: "instagram",
        icon: "mdi mdi-instagram",

      },
    ],
  },
];

const Team = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-white py-4">
        <div className="flex flex-col">
          <div className="flex flex-col mt-8">
            <div className="container max-w-7xl px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <h1 className="text-lmsPrimary text-4xl font-bold mb-8">
                    Meet the Team
                  </h1>

                  <p className="text-gray-700 text-lg font-light">
                    With over years of combined experience, we've got a
                    well-seasoned team.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                {Member.map((member) => (
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src={member.image}
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-lmsPrimary text-xl font-bold mb-1">
                          {member.name}
                        </h1>

                        <div className="text-graydark font-light mb-2">
                          {member.title}
                        </div>

                        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                          {member.socials.map((social) => (
                            <a
                              href="#"
                              className={`flex rounded-full hover:bg-lmsPrimary hover:text-white h-10 w-10`}
                            >
                              <i className={`${social.icon} mx-auto mt-2 `}></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
