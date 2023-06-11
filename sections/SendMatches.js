import React, { useState } from "react";

const EmailPreview = ({ formData }) => {
  const { communityName, eventName, logoURL, numMatches, color } = formData;

  const fake_matches = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      linkedin: "linkedin.com/in/johndoe",
      job: "Software Engineer",
      strength: "Frontend development",
      location: "New York",
    },
    {
      name: "Alice Davis",
      email: "adavis@example.com",
      linkedin: "linkedin.com/in/alicedavis",
      job: "Product Manager",
      strength: "Agile Development",
      location: "San Francisco",
    },
    {
      name: "Sophia Garcia",
      email: "sohpia@example.com",
      linkedin: "linkedin.com/in/sophiagarcia",
      job: "Data Scientist",
      strength: "Machine Learning",
      location: "Los Angeles",
    },
  ];

  return (
    <div style={{ width: "50%" }}>
      <h2 className="text-xl font-semibold">Email Preview</h2>
      <div>
        <img
          src={logoURL}
          alt="Logo"
          style={{
            width: "50%",
            minWidth: "125px",
            paddingLeft: "10px",
            height: "auto",
            display: "blco",
          }}
        />
        <div
          style={{
            background: `${color}`,
            width: "100xp",
            height: "60px",
            margin: "1rem 0 2rem 0",
          }}
        ></div>
      </div>
      <div style={{ paddingLeft: "10px" }}>
        <h1 className="text-3xl mt-4 font-bold text-gray-900 dark:text-white">
          Hey 👋 it's {communityName}
        </h1>

        <p className="text-xl mt-4 font-bold text-gray-900 dark:text-white">
          We're excited you're attending the {eventName}!
        </p>

        <p className="py-8">
          To make this the best expierience possible we decided to partner with{" "}
          <a
            href="https://communitylabs.us"
            style={{ color: `${color}`, fontWeight: "600" }}
          >
            CommunityLabs
          </a>{" "}
          to match you with {numMatches} people before you arrive. Below we'll
          list their name, email, and why we think you should meet. (Don't be
          afraid to reach out first, it's not as scary as you think)
        </p>

        <p className="text-xl mt-4 font-bold text-gray-900 dark:text-white">
          Meet your new friends!
        </p>
        <br />

        {fake_matches.map((match) => (
          <div key={match.name}>
            <p className="font-bold">{match.name}</p>
            <p>
              They are a {match.job} out of {match.location}. They have a
              strength in {match.strength}. Message them on{" "}
              <a
                style={{ color: `${color}`, fontWeight: "600" }}
                href={match.linkedin}
              >
                linkedin
              </a>
            </p>
            <br />
          </div>
        ))}

        <p className="py-2">We can't wait to see you soon 🎉</p>
        <p>- {communityName}</p>
      </div>
    </div>
  );
};

const SendMatches = () => {
  const [formData, setFormData] = useState({
    color: "#ff5349",
    numMatches: null,
    communityName: "Bens Bites",
    eventName: "OpenAI Kickoff",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1200px-OpenAI_Logo.svg.png",
    sendDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      color: "",
      numMatches: null,
      communityName: "",
      eventName: "",
      logoURL: "",
      sendDate: "",
    });
  };

  return (
    <div>
      {/* Filtering and Options */}
      {/* How many people would you like to match? */}
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="num_matches"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Matches per person (Between 1 and 10)
          </label>
          <input
            type="number"
            id="num_matches"
            name="numMatches"
            value={formData.numMatches}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder=""
            min={1}
            max={10}
            required
          />
        </div>

        {/* Community Name */}
        <div>
          <label
            htmlFor="community_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Community Name
          </label>
          <input
            type="text"
            id="community_name"
            name="communityName"
            value={formData.communityName}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Community Labs"
            required
          />
        </div>

        {/* Event Name */}
        <div>
          <label
            htmlFor="event_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Event Name
          </label>
          <input
            type="text"
            id="event_name"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Community Kickoff"
            required
          />
        </div>

        {/* Logo URL */}
        <div>
          <label
            htmlFor="logo_url"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Logo URL
          </label>
          <input
            type="text"
            id="logo_url"
            name="logoURL"
            value={formData.logoURL}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="https://communitylabs.us"
            required
          />
        </div>

        {/* Primary Color */}
        <div>
          <label
            htmlFor="primary_color"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Primary Color
          </label>
          <div className="flex justify-center space-x-2">
            <input
              type="text"
              id="primary_color"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
            <input
              id="primary_color"
              type="color"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          {" "}
          <label
            htmlFor="primary_color"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Send emails on.l,.l
          </label>
          <div className="relative max-w-sm">
            <input
              datepicker
              datepicker-autohide={formData.sendDate.toString()}
              selected={formData.sendDate}
              onChange={handleInputChange}
              type="datetime-local"
              name="sendDate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Select date"
            />
          </div>
        </div>
        <button type="submit">Send Campaign</button>
      </form>
      <EmailPreview formData={formData} />
    </div>
  );
};

export default SendMatches;
