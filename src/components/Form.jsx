import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import locations from "locations-ng";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Form({ status, message, onValidated }) {
  const allStates = locations.state.all();
  const [selectedState, setSelectedState] = React.useState(null);
  const [selectedLga, setSelectedLga] = React.useState(null);
  const [allLgas, setAllLgas] = React.useState([]);
  const [localities, setLocalities] = React.useState([]);
  const [defaultValue, setDefaultValue] = React.useState(
    "--Select an option--"
  );

  const [formData, setFormData] = React.useState({
    MERGE0: "",
    MERGE1: "",
    MERGE2: "",
    MERGE3: "",
    MERGE4: "",
    MERGE5: "",
    MERGE6: "",
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

  function normalCase(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  }

  function handleSubmit(e) {
    e.preventDefault();

    onValidated(formData);
  }

  return (
    <div className="min-h-screen font-sans flex flex-col justify-between relative">
      <Navigation />
      {status === "success" ? (
        <AfterSignup />
      ) : (
        <div className="flex justify-center !text-default px-4 mt-28 mb-32">
          <Card color="transparent" shadow={false} className="w-full">
            <Typography
              variant="h4"
              className="text-center text-default text-[32px] md:text-[48px]"
            >
              Join the waitlist
            </Typography>
            <Typography className="opacity-60 mt-2 font-normal text-center text-default max-w-xl md:text-xl mx-auto">
              We only need your email for you to be added to our waitlist. But,
              if you tell us a bit more about what you need, we&apos;ll put you
              on the priority list.
            </Typography>

            <form
              onSubmit={(e) => handleSubmit(e)}
              className="mt-8 mb-2 w-full max-w-[480px]  mx-auto text-default"
            >
              {status === "error" && (
                <div
                  className="m-5 text-red-500"
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              <div className="mb-4 flex flex-col gap-4 lg:gap-[18px]">
                <div>
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
                        className: "hidden",
                      }}
                      containerProps={{ className: "!min-w-full" }}
                      onChange={(e) =>
                        setFormData({ ...formData, MERGE0: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="firstName" className="text-sm">
                      First name
                    </label>
                    <div className="bg-[#0F1015]">
                      <Input
                        autoComplete="off"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                        className="mt-1.5 !border !border-default/[12%] px-[14px] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base min-w-full"
                        labelProps={{
                          className: "hidden",
                        }}
                        containerProps={{ className: "!min-w-full" }}
                        onChange={(e) =>
                          setFormData({ ...formData, MERGE1: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm">
                      Last name
                    </label>
                    <div className="bg-[#0F1015]">
                      <Input
                        autoComplete="off"
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                        className="mt-1.5 !border !border-default/[12%] px-[14px] py-2.5 rounded-lg text-default placeholder:opacity-[32%] focus:!border-[#1570EF] text-base !w-full"
                        labelProps={{
                          className: "hidden",
                        }}
                        containerProps={{ className: "!min-w-full" }}
                        onChange={(e) =>
                          setFormData({ ...formData, MERGE2: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex flex-col gap-8 lg:gap-2 mt-3 lg:flex-row">
                  <Select
                    className="text-default !border !border-default/[12%] px-[14px] py-2.5 mt-3 focus:!border-[#1570EF] text-base rounded-lg min-w-full select-button bg-[#0F1015]"
                    variant="static"
                    label="State"
                    labelProps={{
                      className: "text-default text-sm after:w-0",
                    }}
                    menuProps={{ className: "text-default bg-[#0F1015]" }}
                    onChange={(e) => {
                      setSelectedState(e);
                      setFormData({ ...formData, MERGE6: e });
                    }}
                  >
                    {allStates.map(({ name }) => (
                      <Option key={name} value={name}>
                        {name}
                      </Option>
                    ))}
                  </Select>

                  <Select
                    className="text-default !border !border-default/[12%] px-[14px] py-2.5 mt-3 focus:!border-[#1570EF] text-base rounded-lg min-w-full select-button bg-[#0F1015]"
                    variant="static"
                    label="LGA"
                    labelProps={{
                      className: "text-default text-sm after:w-0",
                    }}
                    menuProps={{ className: "text-default bg-[#0F1015]" }}
                    onChange={(e) => {
                      setSelectedLga(e);
                      setFormData({ ...formData, MERGE5: e });
                    }}
                  >
                    {allLgas.map((name) => (
                      <Option key={name} value={name}>
                        {name}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="mb-4">
                  <Select
                    className="text-default !border !border-default/[12%] px-[14px] py-2.5 mt-3 focus:!border-[#1570EF] text-base rounded-lg min-w-full select-button bg-[#0F1015]"
                    variant="static"
                    label="Area"
                    labelProps={{
                      className: "text-default text-sm after:w-0",
                    }}
                    menuProps={{ className: "text-default bg-[#0F1015]" }}
                    onChange={(e) => {
                      setFormData({ ...formData, MERGE3: e });
                    }}
                  >
                    {localities.map((name) => (
                      <Option key={name} value={normalCase(name)}>
                        {normalCase(name)}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div>
                  <Select
                    className="text-default !border !border-default/[12%] px-[14px] py-2.5 mt-3 focus:!border-[#1570EF] text-base rounded-lg min-w-full select-button bg-[#0F1015]"
                    variant="static"
                    label="How did you hear about us?"
                    labelProps={{
                      className: "text-default text-sm after:w-0",
                    }}
                    menuProps={{ className: "text-default bg-[#0F1015]" }}
                    onChange={(e) => {
                      setDefaultValue(e);
                      setFormData({ ...formData, MERGE4: e });
                    }}
                    value={defaultValue}
                  >
                    <Option disabled value="--Select an option--">
                      --Select an option--
                    </Option>
                    <Option value="Instagram">Instagram</Option>
                    <Option value="Twitter">Twitter</Option>
                    <Option value="LinkedIn ">LinkedIn</Option>
                    <Option value="Tech editorial">Tech editorial</Option>
                    <Option value="Website">Website</Option>
                    <Option value="Word of mouth (friends & family)">
                      Word of mouth (friends & family)
                    </Option>
                    <Option value="Other">Other</Option>
                  </Select>
                </div>
              </div>
              <Button
                type="submit"
                className="mt-10 lg:text-base normal-case bg-[#1570EF] text-default disabled:opacity-60"
                disabled={status === "sending"}
                fullWidth
              >
                Join Waitlist
              </Button>
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
        <h2 className="font-semibold text-2xl mb-[9px] md:text-[32px]">
          Waitlist Joined
        </h2>
        <p className="opacity-60 md:text-xl">
          An email would be sent to you once you have been granted access.
        </p>
      </div>
      <Link to={"/"}>
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
