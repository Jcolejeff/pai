import { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


export default function Faq() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <Accordion
        className="py-[20px]"
        open={open === 1}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-white/95 lg:text-xl  font-light hover:text-white border-b-white/[0.08]"
        >
          <span className="max-w-[302px] lg:max-w-max">
            How does Pai predict when power outages will occur?
          </span>
        </AccordionHeader>
        <AccordionBody className="text-base lg:text-[18px] text-white/[0.64]">
          Pai uses AI to learn and understand power availability patterns for
          different locations. Based on these patterns, power outages can then
          be predicted with varying degrees of certainty, before they actually
          happen.
        </AccordionBody>
      </Accordion>

      <Accordion
        className="py-[20px]"
        open={open === 2}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-white/95 font-light hover:text-white lg:text-xl border-b-white/[0.08]"
        >
          <span className="max-w-[302px] lg:max-w-max">
            What kind of notifications will I receive about power outages?
          </span>
        </AccordionHeader>
        <AccordionBody className="text-base lg:text-[18px] text-white/[0.64]">
          You will receive important notifications not only about power outages
          or power availability in a location of interest to you, but also be
          notified about insightful information around changes to your power
          patterns based on accurate historical data.
        </AccordionBody>
      </Accordion>

      <Accordion
        className="py-[20px]"
        open={open === 3}
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="text-white/95 font-light hover:text-white lg:text-xl border-b-white/[0.08]"
        >
          <span className="max-w-[302px] lg:max-w-max">
            How accurate are the outage predictions?
          </span>
        </AccordionHeader>
        <AccordionBody className="text-base lg:text-[18px] text-white/[0.64]">
          Pai aims to provide predictions that are as accurate as possible and
          will always report its level of confidence in any of the predictions
          it makes. To achieve this, a considerable amount of effort is invested
          in training, monitoring and maintaining AI models to provide the best
          possible predictions of power outages. This is also why the prediction
          feature is typically not immediately available in any covered location
          as the AI models need time to train on power availability data.
        </AccordionBody>
      </Accordion>

      <Accordion
        className="py-[20px]"
        open={open === 4}
        icon={<Icon id={4} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="text-white/95 font-light hover:text-white lg:text-xl border-b-white/[0.08]"
        >
          <span className="max-w-[302px] lg:max-w-max">
            Can I access historical power outage data through the system?
          </span>
        </AccordionHeader>
        <AccordionBody className="text-base lg:text-[18px] text-white/[0.64]">
          Yes you can, up to a point. All users will have access to a 5-day
          historical view of power outage data in their location of interest, on
          demand. Additionally, Pai will regularly send you historical power
          outage data for 1-2 week periods at regular intervals.
        </AccordionBody>
      </Accordion>
    </div>
  );
}


function Icon({ id, open }) {
  return (
    <div className="flex items-center">
      {id === open ? (
        <img src="/close-icon.png" width={30} height={30} alt="close" />
      ) : (
        <img src="/open-icon.png" width={30} height={30} alt="open" />
      )}
    </div>
  );
}

Icon.propTypes = {
  id: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired,
};
