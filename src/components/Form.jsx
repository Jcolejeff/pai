import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
  Checkbox,
} from '@material-tailwind/react';
import locations from 'locations-ng';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Form({ status, message, onValidated }) {
  const allStates = locations.state.all();
  const [selectedState, setSelectedState] = React.useState(null);
  const [selectedLga] = React.useState(null);
  const [, setAllLgas] = React.useState([]);
  const [, setLocalities] = React.useState([]);
  const [defaultValue, setDefaultValue] = React.useState('--Select an option--');
  const [defaultValue2, setDefaultValue2] = React.useState('--Select business type--');
  const [demoCheckbox, setDemoCheckbox] = React.useState(false);

  const [formData, setFormData] = React.useState({
    EMAIL: '',
    FNAME: '',
    LNAME: '',
    MMERGE3: '',
    MMERGE4: '',
    MMERGE9: '',
    MMERGE10: '',
  });

  function getLgas(state) {
    return locations.lga.lgas(state);
  }

  function getLocalities(state, lga) {
    return locations.lga.localities(state, lga);
  }

  React.useEffect(() => {
    if (selectedState) {
      setAllLgas(getLgas(selectedState));
    }

    if (selectedLga && selectedState) {
      setLocalities(getLocalities(selectedState, selectedLga));
    }
  }, [selectedState, selectedLga]);

  // function normalCase(str) {
  //   return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  // }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    onValidated(formData);
  }

  const waitlistDetails = [
    {
      title: 'power availability insights',
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="20" fill="#15171E" />
          <path
            d="M29 22V24.2C29 25.8802 29 26.7202 28.673 27.362C28.3854 27.9265 27.9265 28.3854 27.362 28.673C26.7202 29 25.8802 29 24.2 29H22M18 11H15.8C14.1198 11 13.2798 11 12.638 11.327C12.0735 11.6146 11.6146 12.0735 11.327 12.638C11 13.2798 11 14.1198 11 15.8V18M23 17L29 11M29 11H23M29 11V17M17 23L11 29M11 29H17M11 29L11 23"
            stroke="#1570EF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description:
        'Understand your historical power supply patterns, see them change in real-time, and be able to predict events such as outages before they occur.',
    },
    {
      title: 'DYNAMIC SIZING OPTIMAZATION',
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="20" fill="#15171E" />
          <path
            d="M29 18L11 18M24 10V14M16 10V14M15.8 30L24.2 30C25.8802 30 26.7202 30 27.362 29.673C27.9265 29.3854 28.3854 28.9265 28.673 28.362C29 27.7202 29 26.8802 29 25.2L29 16.8C29 15.1198 29 14.2798 28.673 13.638C28.3854 13.0735 27.9265 12.6146 27.362 12.327C26.7202 12 25.8802 12 24.2 12L15.8 12C14.1198 12 13.2798 12 12.638 12.327C12.0735 12.6146 11.6146 13.0735 11.327 13.638C11 14.2798 11 15.1198 11 16.8L11 25.2C11 26.8802 11 27.7202 11.327 28.362C11.6146 28.9265 12.0735 29.3854 12.638 29.673C13.2798 30 14.1198 30 15.8 30Z"
            stroke="#1570EF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description:
        'Determine the most optimal combination of power sources to reduce your total power costs to their lowest levels possible, based on your energy demand per time.',
    },
    {
      title: 'Automated Dispatch optimization',
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="20" fill="#15171E" />
          <path
            d="M21 30L18 27M18 27L21 24M18 27H23C26.866 27 30 23.866 30 20C30 17.2076 28.3649 14.7971 26 13.6736M14 26.3264C11.6351 25.2029 10 22.7924 10 20C10 16.134 13.134 13 17 13L22 13M22 13L19 10M22 13L19 16"
            stroke="#1570EF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description:
        'Utilize prescriptive dispatch schedules to operate your various power sources in a concerted fashion to reduce total power costs to the lowest levels possible, based on your energy demand.',
    },
  ];

  return (
    <div className="min-h-screen font-sans flex flex-col justify-between relative">
      <Navigation />
      {status === 'success' ? (
        <AfterSignup />
      ) : (
        <div className="grid container  mx-auto grid-cols-1 md:grid-cols-2 justify-center !text-default px-4 mt-28 mb-32">
          <div>
            <Typography variant="h2" className="text-left mb-5 ">
              Join the waitlist
            </Typography>
            <p>
              Stay ahead of the curve with real-time personalized power status notifications.
              Imagine having a productivity ally at your fingertips that keeps you informed and
              prepared. <br /> <br />
              The power to conquer energy challenges is about to be at your fingertips. Ready to
              harness it?
            </p>
            <div className="mt-5">
              {waitlistDetails.map((details) => (
                <>
                  <div className="flex mb-5">
                    <div className="mr-5">{details.icon}</div>
                    <div>
                      <Typography variant="subtitle2" className="mb-3 font-medium">
                        <b> {details.title.toLocaleUpperCase()}</b>
                      </Typography>
                      <Typography variant="subtitle1" className="font-light">
                        {details.description}
                      </Typography>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <Card color="transparent" shadow={false} className="w-full">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="mt-8 mb-2 w-full max-w-[480px]  mx-auto text-default"
            >
              {status === 'error' && (
                <div className="m-5 text-red-500" dangerouslySetInnerHTML={{ __html: message }} />
              )}
              <div className="mb-4 flex flex-col gap-4 lg:gap-[18px]">
                <div className="mb-4">
                  <label htmlFor="email" className="text-sm">
                    Email address
                  </label>
                  <div className="bg-[#0F1015]">
                    <Input
                      autoComplete="off"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      className="mt-1.5 !border !border-default/[12%] px-[14px] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base bg-[#0F1015]"
                      labelProps={{
                        className: 'hidden',
                      }}
                      containerProps={{ className: '!min-w-full' }}
                      onChange={(e) => setFormData({ ...formData, EMAIL: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 ">
                  <div>
                    <label htmlFor="firstName" className="text-base">
                      First name *
                    </label>
                    <div className="mb-5">
                      <Input
                        autoComplete="off"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        className="mt-1.5 !border !border-default/[12%] px-[14px] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base bg-[#0F1015]"
                        labelProps={{
                          className: 'hidden',
                        }}
                        required
                        onChange={(e) => setFormData({ ...formData, FNAME: e.target.value })}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        crossOrigin={undefined}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="Name" className="text-base">
                      Last name *
                    </label>
                    <div className="mb-5">
                      <Input
                        autoComplete="off"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        className="mt-1.5 !border !border-default/[12%] px-[14px] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base bg-[#0F1015]"
                        labelProps={{
                          className: 'hidden',
                        }}
                        onChange={(e) => setFormData({ ...formData, LNAME: e.target.value })}
                        required
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        crossOrigin={undefined}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Select
                    className="text-default !border !border-default/[12%] px-[14px] py-2.5 mt-3 focus:!border-[#1570EF] text-base rounded-lg min-w-full select-button bg-[#0F1015]"
                    variant="static"
                    label="Business type"
                    labelProps={{
                      className: 'text-default text-sm after:w-0',
                    }}
                    menuProps={{ className: 'text-default bg-[#0F1015]' }}
                    onChange={(e) => {
                      setDefaultValue2(e);
                      setFormData({ ...formData, MMERGE3: e });
                    }}
                    value={defaultValue2}
                  >
                    <Option disabled value="--Select business type--">
                      --Select business type--
                    </Option>
                    <Option value="Industrial">Industrial</Option>
                    <Option value="Business">Business</Option>
                    <Option value="Household">Household</Option>
                  </Select>
                </div>

                <div className="mb-4  gap-8 lg:gap-2 mt-3 lg:flex-row">
                  <Select
                    className="text-default !border !border-default/[12%] px-[14px] py-2.5 mt-3 focus:!border-[#1570EF] text-base rounded-lg min-w-full select-button bg-[#0F1015]"
                    variant="static"
                    label="Location"
                    labelProps={{
                      className: 'text-default text-sm after:w-0',
                    }}
                    menuProps={{ className: 'text-default bg-[#0F1015]' }}
                    onChange={(e) => {
                      setSelectedState(e);
                      setFormData({ ...formData, MMERGE4: e });
                    }}
                  >
                    {allStates.map(({ name }) => (
                      <Option key={name} value={name}>
                        {name}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="mb-4">
                  <div>
                    <Select
                      className="text-default !border !border-default/[12%] px-[14px] py-2.5 mt-3 focus:!border-[#1570EF] text-base rounded-lg min-w-full select-button bg-[#0F1015]"
                      variant="static"
                      label="How much do you spend on power in a month(₦)? "
                      labelProps={{
                        className: 'text-default text-sm after:w-0',
                      }}
                      menuProps={{ className: 'text-default bg-[#0F1015]' }}
                      onChange={(e) => {
                        setDefaultValue(e);
                        setFormData({ ...formData, MMERGE9: e });
                      }}
                      value={defaultValue}
                    >
                      <Option disabled value="--Select an option--">
                        --Select an option--
                      </Option>
                      <Option value="Less than 50,000">Less than 50,000</Option>
                      <Option value="50,000 - 100,000">50,000 - 100,000</Option>
                      <Option value="100,000 - 500,000">100,000 - 500,000</Option>
                      <Option value="500,000 - 2,000,000">500,000 - 2,000,000</Option>
                      <Option value="Above 2M+">Above 2M+</Option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="grid justify-items-center">
                <Button
                  type="submit"
                  className="mt-10 lg:text-base normal-case bg-[#1570EF] text-default disabled:opacity-60"
                  disabled={status === 'sending'}
                  fullWidth
                >
                  Join Waitlist
                </Button>
                <div className="flex items-center">
                  <Checkbox
                    onChange={() => {
                      setDemoCheckbox(!demoCheckbox);
                      setFormData({ ...formData, MMERGE10: (!demoCheckbox).toString() });
                    }}
                  />
                  <div>
                    <Typography
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      className="text-sm"
                    >
                      Request a Demo
                    </Typography>
                  </div>
                </div>
              </div>
            </form>
          </Card>
        </div>
      )}
      <Footer />
    </div>
  );
}

function AfterSignup() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center text-center mx-4 min-h-screen">
      <img src="/waitlist-check.png" width={100} height={100} alt="check" />

      <div>
        <h2 className="font-semibold text-2xl mb-[9px] md:text-[32px]">Waitlist Joined</h2>
        <p className="opacity-60 md:text-xl">
          An email would be sent to you once you have been granted access.
        </p>
      </div>
      <Link to={'/'}>
        <button
          type="button"
          className="btn text-white normal-case w-max mt-2 border-[0.5px] rounded p-2 border-[#D0D5DD] bg-[#0F1015]"
        >
          Back to home
        </button>
      </Link>
    </div>
  );
}

Form.propTypes = {
  status: PropTypes.string,
  onValidated: PropTypes.func.isRequired,
  message: PropTypes.string,
};
